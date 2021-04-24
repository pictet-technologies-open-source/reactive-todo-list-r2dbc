package com.pictet.technologies.opensource.reactive.r2dbc.todolist.rest.api.event;

import lombok.Data;

import java.util.UUID;

@Data
public class HeartBeat implements Event {

    private String id = UUID.randomUUID().toString();

}
