package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.notification;

import lombok.Getter;

/**
 * PostgreSQL notification topics
 */
@Getter
public enum NotificationTopic {

    ITEM_SAVED("item_saved"),
    ITEM_DELETED("item_deleted");

    private final String topicName;

    NotificationTopic(final String topicName) {
        this.topicName = topicName;
    }
}
