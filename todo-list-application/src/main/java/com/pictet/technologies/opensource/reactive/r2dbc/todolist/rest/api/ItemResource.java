package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.Tag;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Accessors(chain = true)
public class ItemResource {

    private Long id;
    private Long version;

    private String description;
    private ItemStatus status;

    private PersonResource assignee;
    private List<Tag> tags;

    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;



}
