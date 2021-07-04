package com.pictet.technologies.opensource.reactive.r2dbc.todolist.model;

import lombok.Getter;

/**
 * PostgreSQL notification topics
 */
@Getter
public enum NotificationTopic {

    ITEM_SAVED,
    ITEM_DELETED
}
