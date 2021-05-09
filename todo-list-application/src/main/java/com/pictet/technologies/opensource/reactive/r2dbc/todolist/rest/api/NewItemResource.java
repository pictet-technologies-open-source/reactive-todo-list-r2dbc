package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@Accessors(chain = true)
public class NewItemResource {

    @NotBlank
    @Size(max=4000)
    private String description;

    private PersonResource assignee;

    private Set<TagResource> tags;

}
