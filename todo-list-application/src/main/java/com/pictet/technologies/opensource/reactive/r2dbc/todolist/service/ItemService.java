package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.UnexpectedItemVersionException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemTag;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
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

import java.util.List;
import java.util.Set;
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

    @Transactional(readOnly = true)
    public Flux<Item> findAll() {
        return itemRepository.findAll(DEFAULT_SORT)
                .flatMap(this::loadRelations);
    }

    @Transactional
    public Mono<Item> save(final Item itemToSave) {

        // TODO add boolean retrieve elements

        return itemToSave.getId() != null 
               ? update(itemToSave)
               : create(itemToSave);
    }

    @Transactional
    public Mono<Void> deleteById(final Long id, final Long version) {

        return findById(id, version, false)
                .zipWith(itemTagRepository.deleteAllByItemId(id))
                .map(Tuple2::getT1)
                .flatMap(itemRepository::delete);
    }

    /**
     * Find an item
     *
     * @param id            identifier of the item
     * @param version       expected version to be retrieved
     * @param loadRelations true if the related objects must also be retrieved
     * @return the item
     * ^
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

    private Mono<Item> update(Item itemToSave) {

        // FIXME simplfy it + avoid finding the item twice
        // FIXME null author

        return findById(itemToSave.getId(), null, true)
                .flatMap(currentItem -> {
                    // Remove the links to the removed tags

                    final Set<Long> currentTagIds = currentItem.getTags().stream().map(Tag::getId).collect(Collectors.toSet());
                    final Set<Long> newTagIds = itemToSave.getTags().stream().map(Tag::getId).collect(Collectors.toSet());

                    currentTagIds.removeAll(newTagIds);

                    return this.itemTagRepository.deleteAllByTagIdIn(currentTagIds)
                            .map(nb -> currentItem);
                })
                .flatMap(currentItem -> {

                    // Add the links to the added tags

                    final Set<Long> currentTagIds = currentItem.getTags().stream().map(Tag::getId).collect(Collectors.toSet());
                    final Set<Long> newTagIds = itemToSave.getTags().stream().map(Tag::getId).collect(Collectors.toSet());

                    newTagIds.removeAll(currentTagIds);
                    List<ItemTag> newItemTags = newTagIds.stream().map(tagId -> new ItemTag().setItemId(itemToSave.getId()).setTagId(tagId)).collect(Collectors.toList());

                    return this.itemTagRepository.saveAll(newItemTags)
                            .collectList();
                })
                // Save the item
                .flatMap(r -> itemRepository.save(itemToSave));
    }

    private Mono<Item> create(Item item) {
        return itemRepository.save(item)
                .flatMap(savedItem ->
                        Mono.just(savedItem)
                                .zipWith(itemTagRepository.saveAll(
                                        savedItem.getTags().stream()
                                                .map(tag -> new ItemTag().setItemId(savedItem.getId()).setTagId(tag.getId()))
                                                .collect(Collectors.toSet())).collectList())
                                .map(Tuple2::getT1));
    }

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


//    default Collection<Long> toTagIds(Collection<Tag> tags) {
//        if(tags == null) {
//            return new HashSet<>();
//        }
//
//        return tags.stream().map(Tag::getId).collect(Collectors.toSet());
//    }

}
