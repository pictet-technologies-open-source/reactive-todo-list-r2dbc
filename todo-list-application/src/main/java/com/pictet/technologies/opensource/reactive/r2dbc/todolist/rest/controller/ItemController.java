package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.controller;


import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemPatchResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemUpdateResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.NewItemResource;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.Event;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.ItemDeleted;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event.ItemSaved;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.mapper.ItemMapper;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.ItemService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.time.Duration;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE;
import static org.springframework.http.ResponseEntity.created;
import static org.springframework.http.ResponseEntity.noContent;

@RestController
@RequestMapping(value = "/items")
@RequiredArgsConstructor
@Slf4j
public class ItemController {

    private final ItemService itemService;
    private final ItemMapper itemMapper;

    @ApiOperation("Create a new item")
    @PostMapping
    public Mono<ResponseEntity<Void>> create(@Valid @RequestBody final NewItemResource newItemResource) {

        return itemService.save(itemMapper.toModel(newItemResource))
                .map(item -> created(linkTo(ItemController.class).slash(item.getId()).toUri()).build());

    }

    @ApiOperation("Update an existing item")
    @PutMapping(value = "/{id}")
    public Mono<ResponseEntity<Void>> update(@PathVariable @NotNull final Long id,
                                             @RequestHeader(value = HttpHeaders.IF_MATCH, required = false) Long version,
                                             @Valid @RequestBody ItemUpdateResource itemUpdateResource) {


        // Find the item and update the instance
        return itemService.findById(id, version).map(item -> {
            itemMapper.update(itemUpdateResource, item);
            return item;
        }).flatMap(itemService::save)
                .map(item -> noContent().build());
    }

    @ApiOperation("Patch an existing item following the patch merge RCF (https://tools.ietf.org/html/rfc7396)")
    @PatchMapping(value = "/{id}")
    @SuppressWarnings({"OptionalAssignedToNull", "OptionalGetWithoutIsPresent"})
    public Mono<ResponseEntity<Void>> patch(@PathVariable @NotNull final Long id,
                                            @RequestHeader(value = HttpHeaders.IF_MATCH, required = false) Long version,
                                            @Valid @RequestBody ItemPatchResource patch) {

        return itemService.findById(id, version).map(item -> {
            if (patch.getDescription() != null) {
                // The description has been provided in the patch
                item.setDescription(patch.getDescription().get());
            }

            if (patch.getStatus() != null) {
                // The status has been provided in the patch
                item.setStatus(patch.getStatus().get());
            }
            return item;
        }).flatMap(itemService::save)
                .map(item -> noContent().build());
    }

    @ApiOperation("Find an item by its id")
    @GetMapping(value = "/{id}", produces = {APPLICATION_JSON_VALUE})
    public Mono<ItemResource> findById(@PathVariable Long id) {

        return itemService.findById(id, null).map(itemMapper::toResource);
    }

    @ApiOperation("Get a the list of items")
    @GetMapping(produces = TEXT_EVENT_STREAM_VALUE)
    public Flux<ItemResource> getAllItems() {

        return itemService.findAll()
                .map(itemMapper::toResource);
    }


    @ApiOperation("Delete an item")
    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> delete(@PathVariable final Long id,
                                             @RequestHeader(value = HttpHeaders.IF_MATCH, required = false) Long version) {

        return itemService.deleteById(id, version).map(empty -> noContent().build());
    }

    @GetMapping("/events")
    public Flux<ServerSentEvent<Event>> listenToEvents() {

        final Flux<Event> itemSavedFlux =
                this.itemService.listenToSavedItems()
                        .map(itemMapper::toResource)
                        .map(ItemSaved::new);

        final Flux<Event> itemDeletedFlux =
                this.itemService.listenToDeletedItems()
                        .map(itemMapper::toResource)
                        .map(ItemResource::getId)
                        .map(ItemDeleted::new);

        return Flux.merge(itemSavedFlux, itemDeletedFlux)
                .map(event -> ServerSentEvent.<Event>builder()
                        .retry(Duration.ofSeconds(4L))
                        .event(event.getClass().getSimpleName())
                        .data(event).build());
    }

}
