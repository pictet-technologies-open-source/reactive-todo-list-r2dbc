package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.UnexpectedItemVersionException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
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
        return loadRelationships(itemRepository.findAll(DEFAULT_SORT));
    }

    @Transactional
    public Mono<Item> save(final Item item) {
        if (item.getId() != null) {
            // Update
            return verifyExistence(item.getId())
                    .flatMap(exists -> itemRepository.save(item));
        }
        return itemRepository.save(item);
    }

    @Transactional
    public Mono<Void> deleteById(final Long id, final Long version) {

        return findById(id, version).flatMap(itemRepository::delete);
    }

    /**
     * Find an item
     *
     * @param id      identifier of the item
     * @param version expected version to be retrieved
     * @return the item
^     */
    @Transactional(readOnly = true)
    public Mono<Item> findById(final Long id, final Long version) {

        return itemRepository.findById(id)
                .switchIfEmpty(Mono.error(new ItemNotFoundException(id)))
                .handle((item, sink) -> {
                    if (version != null && !version.equals(item.getVersion())) {
                        sink.error(new UnexpectedItemVersionException(version, item.getVersion()));
                    } else {
                        sink.next(item);
                    }
                });
    }


    /**
     * Listen to all saved items
     * @return the saved items
     */
    public Flux<Item> listenToSavedItems() {

        return loadRelationships(this.notificationService.listen(ITEM_SAVED, Item.class));
    }

    /**
     * Listen to all deleted items
     * @return the ID of the deleted items
     */
    public Flux<Long> listenToDeletedItems() {

        return this.notificationService.listen(ITEM_DELETED, Item.class)
                .map(Item::getId);
    }

    public Flux<Item> loadRelationships(Flux<Item> items) {

        return items.flatMap(item -> Flux.just(item)
                .zipWith(item.getAssigneeId() != null ? personRepository.findById(item.getAssigneeId()) : Mono.empty())
                .map(result -> result.getT1().setAssignee(result.getT2()))

                .zipWith(itemTagRepository.findAllByItemId(item.getId())
                        .flatMap(link -> tagRepository.findById(link.getTagId()))
                        .collectList())
                .map(result -> result.getT1().setTags(result.getT2()))
        );

    }

    private Mono<Boolean> verifyExistence(final Long id) {
        return itemRepository.existsById(id).handle((exists, sink) -> {
            if (Boolean.FALSE.equals(exists)) {
                sink.error(new ItemNotFoundException(id));
            } else {
                sink.next(exists);
            }
        });
    }

}
