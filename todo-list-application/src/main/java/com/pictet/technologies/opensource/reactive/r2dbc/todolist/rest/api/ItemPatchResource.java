package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Data
@Accessors(chain = true)
public class ItemPatchResource {

    private Optional<@NotBlank String> description;
    private Optional<@NotNull ItemStatus> status;

}
