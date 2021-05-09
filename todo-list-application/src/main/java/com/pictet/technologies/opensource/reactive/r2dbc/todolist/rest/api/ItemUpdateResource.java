package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@Accessors(chain = true)
public class ItemUpdateResource {

    @NotBlank
    @Size(max=4000)
    private String description;

    @NotNull
    private ItemStatus status;

    private PersonResource assignee;

    private Set<TagResource> tags;
}
