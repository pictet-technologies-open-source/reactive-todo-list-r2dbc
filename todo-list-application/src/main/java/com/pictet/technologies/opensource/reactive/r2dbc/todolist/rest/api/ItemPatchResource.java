package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.ItemStatus;
import lombok.Data;
import lombok.experimental.Accessors;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Optional;
import java.util.Set;

@Data
@Accessors(chain = true)
public class ItemPatchResource {

    private Optional<@NotBlank @Size(max=4000) String> description;
    private Optional<@NotNull ItemStatus> status;
    private Optional<Long> assigneeId;
    private Optional<Set<Long>> tagIds;

}
