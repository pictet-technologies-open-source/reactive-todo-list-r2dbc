package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.StdDateFormat;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.UnexpectedItemVersionException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.mapper.ItemMapper;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.ItemRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.Event;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.ItemDeleted;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.ItemSaved;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.notification.DatabaseNotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.notification.NotificationTopic.ITEM_DELETED;
import static com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.notification.NotificationTopic.ITEM_SAVED;

@Service
@RequiredArgsConstructor
public class ItemService {

    private static final Sort DEFAULT_SORT = Sort.by(Sort.Order.by("lastModifiedDate"));

    private final DatabaseNotificationService connectionService;
    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    @Transactional(readOnly = true)
    public Flux<Item> findAll() {
        return itemRepository.findAll(DEFAULT_SORT);
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
    public Mono<Void> deleteById(final Long id, Long version) {

        return findById(id, version).flatMap(itemRepository::delete);
    }

    /**
     * Find an item
     *
     * @param id      identifier of the item
     * @param version expected version to be modified
     * @return the item
     * @throws ItemNotFoundException if the item with the provided identifier does not exist
     */
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

    @Transactional(readOnly = true)
    public Flux<Event> listenToEvents() {

        final ObjectMapper objectMapper = new ObjectMapper()
                        .registerModule(new JavaTimeModule())
                .setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);

        return this.connectionService.listenTopics(ITEM_SAVED, ITEM_DELETED)
                .map(notification -> {

                    Event event = null;
                    try {
                        final Item item = objectMapper.readValue(notification.getParameter(), Item.class);
                        if(ITEM_DELETED.equals(notification.getName())) {
                            event = new ItemDeleted().setItemId(item.getId());
                        } else {
                            event = new ItemSaved().setItem(itemMapper.toResource(item));
                        }
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                    }

                    return event;
                });
    }

    private Mono<Boolean> verifyExistence(Long id) {
        return itemRepository.existsById(id).handle((exists, sink) -> {
            if (Boolean.FALSE.equals(exists)) {
                sink.error(new ItemNotFoundException(id));
            } else {
                sink.next(exists);
            }
        });
    }

}
