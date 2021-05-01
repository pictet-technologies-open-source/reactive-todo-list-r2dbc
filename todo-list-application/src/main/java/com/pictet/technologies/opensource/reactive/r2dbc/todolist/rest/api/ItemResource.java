package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@Accessors(chain = true)
public class ItemResource {

    private Long id;
    private Long version;

    private String description;
    private ItemStatus status;

    private LocalDateTime createdDate;
    private LocalDateTime lastModifiedDate;

}
