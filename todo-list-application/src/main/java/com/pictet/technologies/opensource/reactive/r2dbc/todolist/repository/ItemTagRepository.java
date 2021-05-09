package com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemTag;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface ItemTagRepository extends ReactiveSortingRepository<ItemTag, Long> {

    Flux<ItemTag> findAllByItemId(Long itemId);
}
