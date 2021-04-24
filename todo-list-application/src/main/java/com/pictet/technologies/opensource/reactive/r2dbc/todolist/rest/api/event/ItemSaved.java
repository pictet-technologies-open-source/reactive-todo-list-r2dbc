package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.ItemResource;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ItemSaved implements Event {

    private ItemResource item;

}
