package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.UnexpectedItemVersionException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.mapper.TagMapper;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemTag;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.ItemRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.ItemTagRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.PersonRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import static com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.NotificationTopic.ITEM_DELETED;
import static com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.NotificationTopic.ITEM_SAVED;

@Service
@RequiredArgsConstructor
public class ItemService {

    private static final Sort DEFAULT_SORT = Sort.by(Sort.Order.by("lastModifiedDate"));

    private final NotificationService notificationService;

    private final ItemRepository itemRepository;
    private final PersonRepository personRepository;
    private final ItemTagRepository itemTagRepository;
    private final TagRepository tagRepository;
    private final TagMapper tagMapper;

    @Transactional(readOnly = true)
    public Flux<Item> findAll() {
        return itemRepository.findAll(DEFAULT_SORT)
                .flatMap(this::loadRelations);
    }

    @Transactional
    public Mono<Long> create(Item item) {

        if(item.getId() != null || item.getVersion() != null) {
            throw new IllegalArgumentException("When creating an item, the id and the version must be null");
        }

        return  // Save the new item
                itemRepository.save(item)
                // Save the links to the tags
                .flatMap(savedItem ->
                     itemTagRepository.saveAll(tagMapper.toItemTags(savedItem.getId(), savedItem.getTags()))
                         .collectList()
                         // Return the ID of the newly created item
                         .then(Mono.just(savedItem.getId())));
    }

    @Transactional
    public Mono<Long> update(Item itemToSave) {

        if(itemToSave.getId() == null || itemToSave.getVersion() == null) {
            throw new IllegalArgumentException("When updating an item, the id and the version must be provided");
        }

        final Collection<Long> itemToSaveTagIds = tagMapper.toTagIds(itemToSave.getTags());

        return  // Delete the links to the removed tags
                this.itemTagRepository.deleteAllByItemIdAndTagIdNotIn(itemToSave.getId(), itemToSaveTagIds)

                // Find the current item
                .then(findById(itemToSave.getId(), itemToSave.getVersion(), true))

                // Insert the links to the new added tags
                .flatMap(currentItem -> {

                    final Collection<Long> currentTagIds = tagMapper.toTagIds(currentItem.getTags());

                    // Compute the list of new tag ids
                    itemToSaveTagIds.removeAll(currentTagIds);

                    // Create the links to the added tags
                    final List<ItemTag> newItemTags = itemToSaveTagIds.stream()
                            .map(tagId -> new ItemTag(itemToSave.getId(), tagId)).collect(Collectors.toList());

                    return this.itemTagRepository.saveAll(newItemTags).collectList();

                })

                // Save the item
                .flatMap(r -> itemRepository.save(itemToSave))
                .map(Item::getId);
    }

    @Transactional
    public Mono<Void> deleteById(final Long id, final Long version) {

        return  // Find the item to delete
                findById(id, version, false)

                // Delete the links to the tags
                .zipWith(itemTagRepository.deleteAllByItemId(id))

                // Return the item
                .map(Tuple2::getT1)

                // Delete the item
                .flatMap(itemRepository::delete);
    }

    /**
     * Find an item
     *
     * @param id            identifier of the item
     * @param version       expected version to be retrieved
     * @param loadRelations true if the related objects must also be retrieved
     *
     * @return the item
     *
     */
    @Transactional(readOnly = true)
    public Mono<Item> findById(final Long id, final Long version, final boolean loadRelations) {

        final Mono<Item> itemMono = itemRepository.findById(id)
                .switchIfEmpty(Mono.error(new ItemNotFoundException(id)))
                .handle((item, sink) -> {
                    // Optimistic locking: pre-check
                    if (version != null && !version.equals(item.getVersion())) {
                        sink.error(new UnexpectedItemVersionException(version, item.getVersion()));
                    } else {
                        sink.next(item);
                    }
                });

        return loadRelations ? itemMono.flatMap(this::loadRelations) : itemMono;
    }

    /**
     * Listen to all saved items
     *
     * @return the saved items
     */
    public Flux<Item> listenToSavedItems() {

        return this.notificationService.listen(ITEM_SAVED, Item.class)
                .flatMap(this::loadRelations);
    }

    /**
     * Listen to all deleted items
     *
     * @return the ID of the deleted items
     */
    public Flux<Long> listenToDeletedItems() {

        return this.notificationService.listen(ITEM_DELETED, Item.class)
                .map(Item::getId);
    }

    /**
     * Load the objects related to an item
     * @param item Item
     * @return The items with the loaded related objects (assignee, tags)
     */
    private Mono<Item> loadRelations(final Item item) {

        // Load the tags
        Mono<Item> mono = Mono.just(item)
                .zipWith(tagRepository.findTagsByItemId(item.getId()).collectList())
                .map(result -> result.getT1().setTags(result.getT2()));

        // Load the assignee (if set)
        if (item.getAssigneeId() != null) {
            mono = mono.zipWith(personRepository.findById(item.getAssigneeId()))
                    .map(result -> result.getT1().setAssignee(result.getT2()));
        }

        return mono;
    }

}
