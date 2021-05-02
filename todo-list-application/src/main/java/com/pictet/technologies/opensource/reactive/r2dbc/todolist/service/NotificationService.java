package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.exception.NotificationDeserializationException;
import com.pictet.technologies.opensource.reactive.r2dbc.todolist.model.NotificationTopic;
import io.micrometer.core.instrument.util.StringUtils;
import io.r2dbc.postgresql.api.PostgresqlConnection;
import io.r2dbc.spi.ConnectionFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final ConnectionFactory connectionFactory;
    private final Set<String> watchedTopicNames = new HashSet<>();

    private PostgresqlConnection connection;
    private ObjectMapper objectMapper;

    /**
     * Listen to a postgreSQL topic
     *
     * @param topic Topic to which the connection needs to subscribe to
     * @param clazz class of the notification parameter (used for deserialization)
     * @return the notification parameters
     */
    public <T> Flux<T> listen(final NotificationTopic topic, final Class<T> clazz) {

        // Listen to the topic
        final String topicName = topic.getTopicName();

        synchronized (watchedTopicNames) {
            if (!watchedTopicNames.contains(topicName)) {
                executeListenStatement(topicName);
                watchedTopicNames.add(topicName);
            }
        }

        // Get the notifications
        return getConnection().getNotifications()
                .filter(notification -> topicName.equals(notification.getName()) && notification.getParameter() != null)
                .handle((notification, sink) -> {
                    final String json = notification.getParameter();
                    if (!StringUtils.isBlank(json)) {
                        try {
                            sink.next(objectMapper.readValue(json, clazz));
                        } catch (JsonProcessingException e) {
                            Mono.error(new NotificationDeserializationException(topic, e));
                        }
                    }
                });
    }

    /**
     * Unlisten from a postgreSQL topic
     *
     * @param topic Topic to which the connection needs to unsubscribe from
     */
    public void unlisten(final NotificationTopic topic) {

        final String topicName = topic.getTopicName();

        synchronized (watchedTopicNames) {

            if (watchedTopicNames.contains(topicName)) {
                executeUnlistenStatement(topicName);
                watchedTopicNames.remove(topicName);
            }
        }
    }

    @PostConstruct
    private void postConstruct() {

        this.objectMapper = createObjectMapper();
    }

    @PreDestroy
    private void preDestroy() {

        this.getConnection().close().subscribe();
    }

    /**
     * Execute the SQL statement used to listen to a given topic
     *
     * @param topicName Name of the topic to listen to
     */
    private void executeListenStatement(String topicName) {
        getConnection().createStatement("LISTEN " + topicName).execute().subscribe();
    }

    /**
     * Execute the SQL statement used to unlisten from a given topic
     *
     * @param topicName Name of the topic to unlisten from
     */
    private void executeUnlistenStatement(String topicName) {
        getConnection().createStatement("UNLISTEN " + topicName).execute().subscribe();
    }

    /**
     * Get or create a PostgreSQL database connection
     *
     * @return the connection created synchronously
     */
    private PostgresqlConnection getConnection() {

        if (connection == null) {

            synchronized (NotificationService.class) {
                if (connection == null) {
                    connection = Mono.from(connectionFactory.create())
                            .cast(PostgresqlConnection.class)
                            .block();
                }
            }
        }

        return this.connection;
    }

    /**
     * Create an object mapper used to convert the json notification
     * parameters to entities
     *
     * @return the object mapper
     */
    private ObjectMapper createObjectMapper() {
        return new ObjectMapper()
                .registerModule(new JavaTimeModule())
                // This strategy is needed to match the DB column names with the entity field names
                .setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
    }

}
