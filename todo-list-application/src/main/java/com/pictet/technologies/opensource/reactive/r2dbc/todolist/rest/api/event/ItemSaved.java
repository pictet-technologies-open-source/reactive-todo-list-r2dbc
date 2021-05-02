package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemResource;
import lombok.Data;
import lombok.Value;
import lombok.experimental.Accessors;

@Value
public class ItemSaved implements Event {

    ItemResource item;

}
