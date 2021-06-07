package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.ItemNotFoundException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Person;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PersonService {

    // Note that the name of the fields to be sorted on are the DB field names
    private static final Sort DEFAULT_SORT = Sort.by(Sort.Order.by("first_name,last_name"));

    private final PersonRepository personRepository;

    public Flux<Person> findAll() {
        return personRepository.findAll(DEFAULT_SORT);
    }

    /**
     * Find a person
     *
     * @param id      identifier of the person
     * @return the person
     */
    public Mono<Person> findById(final Long id) {

        return personRepository.findById(id)
                .switchIfEmpty(Mono.error(new ItemNotFoundException(id)));
    }


}
