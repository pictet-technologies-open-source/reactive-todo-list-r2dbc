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

    /**
     * Find all items
     * @return Find all items with the related objects loaded
     */
    @Transactional(readOnly = true)
    public Flux<Item> findAll() {
        return itemRepository.findAll(DEFAULT_SORT)
                .flatMap(this::loadRelations);
    }

    /**
     * Create a new item
     * @param item Item to be created
     *
     * @return the saved item without the related entities
     */
    @Transactional
    public Mono<Item> create(Item item) {

        if(item.getId() != null || item.getVersion() != null) {
            return Mono.error(new IllegalArgumentException("When creating an item, the id and the version must be null"));
        }

        return  // Save the new item
                itemRepository.save(item)
                // Save the links to the tags
                .flatMap(savedItem ->
                     itemTagRepository.saveAll(tagMapper.toItemTags(savedItem.getId(), savedItem.getTags()))
                         .collectList()
                         // Return the newly created item
                         .then(Mono.just(savedItem)));
    }

    /**
     * Update an Item
     * @param itemToSave item to be saved
     * @return the saved item without the related entities
     */
    @Transactional
    public Mono<Item> update(Item itemToSave) {

        if(itemToSave.getId() == null || itemToSave.getVersion() == null) {
            return Mono.error(new IllegalArgumentException("When updating an item, the id and the version must be provided"));
        }

        return // Find the existing link to the tags
               itemTagRepository.findAllByItemId(itemToSave.getId()).collectList()

               // Remove and add the links to the tags
               .flatMap(currentItemTags -> {

                   // As R2DBC does not support embedded IDs, the ItemTag entity has a technical key
                   // We can't just replace all ItemTags, we need to generate the proper insert/delete statements

                   final Collection<Long> existingTagIds = tagMapper.extractTagIdsFromItemTags(currentItemTags);
                   final Collection<Long> tagIdsToSave = tagMapper.extractTagIdsFromTags(itemToSave.getTags());

                   // Item Tags to be deleted
                   final Collection<ItemTag> removedItemTags = currentItemTags.stream()
                           .filter(itemTag -> !tagIdsToSave.contains(itemTag.getTagId()))
                           .collect(Collectors.toList());

                   // Item Tags to be inserted
                   final Collection<ItemTag> addedItemTags = tagIdsToSave.stream()
                           .filter(tagId -> !existingTagIds.contains(tagId))
                           .map(tagId -> new ItemTag(itemToSave.getId(), tagId))
                           .collect(Collectors.toList());

                   return itemTagRepository.deleteAll(removedItemTags)
                           .then(itemTagRepository.saveAll(addedItemTags).collectList());
               })

               // Save the item
               .then(itemRepository.save(itemToSave));
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
                        // The version are different, return an error
                        sink.error(new UnexpectedItemVersionException(version, item.getVersion()));
                    } else {
                        sink.next(item);
                    }
                });

        // Load the related objects, if requested
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
