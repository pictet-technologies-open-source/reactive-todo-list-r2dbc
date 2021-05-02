package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event;

import lombok.Value;

@Value
public class ItemDeleted implements Event {

    Long itemId;

}
