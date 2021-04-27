package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.UnexpectedItemVersionException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.mapper.ItemMapper;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Item;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.ItemRepository;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.Event;
import io.r2dbc.postgresql.api.Notification;
import io.r2dbc.postgresql.api.PostgresqlConnection;
import io.r2dbc.postgresql.api.PostgresqlResult;
import io.r2dbc.spi.ConnectionFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

@Service
@RequiredArgsConstructor
public class ItemService {

    private static final Sort DEFAULT_SORT = Sort.by(Sort.Order.by("lastModifiedDate"));

    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;
    private final ConnectionFactory connectionFactory;
    private PostgresqlConnection eventConnection;

    @PostConstruct
    private void postConstruct() {
        this.eventConnection = Mono.from(connectionFactory.create())
                .cast(PostgresqlConnection.class)
                .block();

        Flux<Notification> listenItemSaved = this.eventConnection.createStatement("LISTEN item_saved").execute()
                .flatMap(PostgresqlResult::getRowsUpdated)
                .thenMany(eventConnection.getNotifications()).map(e -> {
                        System.out.println(e);
                        return e;
                        }
                );
    }

    @PreDestroy
    private void preDestroy() {
        this.eventConnection.close().subscribe();
    }

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
    public Mono<Item> findById(final Long id, Long version) {

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

        // TODO
        return null;
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
