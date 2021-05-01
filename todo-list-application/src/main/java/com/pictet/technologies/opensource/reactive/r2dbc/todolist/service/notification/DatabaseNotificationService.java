package com.pictet.technologies.opensource.reactive.r2dbc.todolist.service.notification;

import io.r2dbc.postgresql.PostgresqlConnectionFactory;
import io.r2dbc.postgresql.api.Notification;
import io.r2dbc.postgresql.api.PostgresqlConnection;
import io.r2dbc.postgresql.api.PostgresqlResult;
import io.r2dbc.spi.ConnectionFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DatabaseNotificationService {

    private final ConnectionFactory connectionFactory;
    private final Set<String> watchedTopicNames = new HashSet<>();

    private PostgresqlConnection connection;

    /**
     * Listen some postgreSQL topics
     *
     * @param topics Topics to which the connection needs to subscribe to
     * @return the notifications as json documents
     */
    public Flux<Notification> listenTopics(final NotificationTopic... topics) {

        if (topics.length == 0) {
            throw new IllegalArgumentException("At least one topic is required");
        }

        // Listen to all topics if we are not already listened
        final List<String> topicNames = extractTopicNames(topics);

        synchronized(watchedTopicNames) {

            topicNames.stream()
                    .filter(topicName -> ! watchedTopicNames.contains(topicName))
                    .forEach(topicName -> connection.createStatement("LISTEN " + topicName)
                        .execute()
                        .flatMap(PostgresqlResult::getRowsUpdated).subscribe());

            watchedTopicNames.addAll(topicNames);
        }

        // Get the notifications for the provided topics
        return connection.getNotifications()
                .filter(notification -> topicNames.contains(notification.getName()))
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
    public void unlistenTopics(final NotificationTopic... topics) {

        final List<String> topicNames = extractTopicNames(topics);
        synchronized(watchedTopicNames) {

            topicNames.stream().filter(watchedTopicNames::contains)
                    .forEach(topic -> connection.createStatement("UNLISTEN " + topic).execute()
                            .flatMap(PostgresqlResult::getRowsUpdated).subscribe());

            watchedTopicNames.removeAll(topicNames);
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

        return Mono.from(connectionFactory.create())
                .cast(PostgresqlConnection.class)
                .block();
    }

    /**
     * Extract the list of topic names
     * @param topics List of topics
     * @return  The topic names
     */
    private List<String> extractTopicNames(NotificationTopic... topics) {
        return Arrays.stream(topics).map(NotificationTopic::getTopicName).collect(Collectors.toList());
    }

}
