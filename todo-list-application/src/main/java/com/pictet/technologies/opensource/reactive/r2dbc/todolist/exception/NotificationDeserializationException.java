package com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception;

import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.NotificationTopic;

public class NotificationDeserializationException extends RuntimeException {

    public NotificationDeserializationException(NotificationTopic topic, Throwable cause) {
        super(String.format("Cannot deserialize the notification for topic [%s]", topic.getTopicName()), cause);
    }

}
