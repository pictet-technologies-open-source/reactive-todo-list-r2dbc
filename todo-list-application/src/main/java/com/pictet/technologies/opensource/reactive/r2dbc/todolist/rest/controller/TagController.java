package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.controller;


import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.PersonResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper.PersonMapper;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.PersonService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE;

@RestController
@RequestMapping(value = "/tags")
@RequiredArgsConstructor
@Slf4j
public class TagController {

    private final PersonService personService;
    private final PersonMapper personMapper;

    @ApiOperation("Find a person by its id")
    @GetMapping(value = "/{id}", produces = {APPLICATION_JSON_VALUE})
    public Mono<PersonResource> findById(@PathVariable final Long id) {

        return personService.findById(id).map(personMapper::toResource);
    }

    @ApiOperation("Get the tags")
    @GetMapping(produces = TEXT_EVENT_STREAM_VALUE)
    public Flux<PersonResource> getAllItems() {

        return personService.findAll()
                .map(personMapper::toResource);
    }

}
