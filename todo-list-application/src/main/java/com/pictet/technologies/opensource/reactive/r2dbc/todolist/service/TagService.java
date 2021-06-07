package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.TagNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class TagService {

    private static final Sort DEFAULT_SORT = Sort.by(Sort.Order.by("name"));

    private final TagRepository tagRepository;

    public Flux<Tag> findAll() {
        return tagRepository.findAll(DEFAULT_SORT);
    }

    /**
     * Find a Tag
     *
     * @param id      identifier of the tag
     * @return the person
     */
    public Mono<Tag> findById(final Long id) {

        return tagRepository.findById(id)
                .switchIfEmpty(Mono.error(new TagNotFoundException(id)));
    }


}
