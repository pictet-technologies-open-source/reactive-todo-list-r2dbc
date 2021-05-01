package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ItemDeleted implements Event {

    private Long itemId;

}
