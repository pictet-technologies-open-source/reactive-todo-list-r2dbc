package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service;

import io.r2dbc.postgresql.PostgresqlConnectionFactory;
import io.r2dbc.postgresql.api.Notification;
import io.r2dbc.postgresql.api.PostgresqlConnection;
import io.r2dbc.postgresql.api.PostgresqlResult;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.*;

@Service
@RequiredArgsConstructor
public class DatabaseNotificationService {

    private final PostgresqlConnectionFactory connectionFactory;
    private final Set<String> watchedTopics = new HashSet<>();

    private PostgresqlConnection connection;

    /**
     * Listen some postgreSQL topics
     *
     * @param topics Topics to which the connection needs to subscribe to
     * @return the notifications as json documents
     */
    Flux<String> listenTopics(final String... topics) {

        if (topics.length == 0) {
            throw new IllegalArgumentException("At least one topic is required");
        }

        // Listen to all topics if we are not already listened
        final List<String> topicList = Arrays.asList(topics);
        synchronized(watchedTopics) {

            topicList.stream().filter(topic -> ! watchedTopics.contains(topic))
                    .forEach(topic -> connection.createStatement("LISTEN " + topic).execute()
                            .flatMap(PostgresqlResult::getRowsUpdated).subscribe());

            watchedTopics.addAll(topicList);
        }

        // Get the notifications for the provided topics
        return connection.getNotifications()
                .filter(notification -> topicList.contains(notification.getName()))
                .map(Notification::getParameter)
                .map(p -> {
                    System.out.println(p);
                    return p;
                });
    }

    /**
     * Unlisten some postgreSQL topics
     *
     * @param topics Topics to which the connection needs to unsubscribe from
     */
    void unlistenTopics(final String... topics) {

        final List<String> topicList = Arrays.asList(topics);
        synchronized(watchedTopics) {

            topicList.stream().filter(watchedTopics::contains)
                    .forEach(topic -> connection.createStatement("UNLISTEN " + topic).execute()
                            .flatMap(PostgresqlResult::getRowsUpdated).subscribe());

            watchedTopics.removeAll(topicList);
        }

    }

    @PostConstruct
    private void postConstruct() {
        this.connection = createConnection();
    }

    @PreDestroy
    private void preDestroy() {

        this.connection.close().subscribe();
    }

    /**
     * Create a PostgreSQL database connection
     *
     * @return the created connection, returns synchronously
     */
    private PostgresqlConnection createConnection() {
        return Mono.from(connectionFactory.create()).block();
    }

}
