package com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemTag;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

import java.util.Set;

@Repository
public interface ItemTagRepository extends ReactiveSortingRepository<ItemTag, Long> {

    Mono<Integer> deleteAllByItemId(Long itemId);

    Mono<Integer> deleteAllByTagIdIn(Set<Long> tagIds);

}
