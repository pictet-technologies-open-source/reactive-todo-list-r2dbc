package com.pictet.technologies.opensource.reactive.r2dbc.todolist.config;

import io.r2dbc.postgresql.PostgresqlConnectionConfiguration;
import io.r2dbc.postgresql.PostgresqlConnectionFactory;
import io.r2dbc.spi.ConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.config.AbstractR2dbcConfiguration;
import org.springframework.lang.NonNull;

@Configuration
public class DatabaseConfiguration extends AbstractR2dbcConfiguration {

    private static final String BASE_CONFIG = "com.pictet.technologies.opensource.reactive.r2dbc.todolist.database";

    @Value("${" + BASE_CONFIG + ".name}")
    private String database;

    @Value("${" + BASE_CONFIG + ".host}")
    private String host;

    @Value("${" + BASE_CONFIG + ".port}")
    private int port;

    @Value("${" + BASE_CONFIG + ".username}")
    private String username;

    @Value("${" + BASE_CONFIG + ".password}")
    private String password;

    @Override
    @Bean
    @NonNull
    public ConnectionFactory connectionFactory() {

        return new PostgresqlConnectionFactory(PostgresqlConnectionConfiguration.builder()
                .host(host)
                .port(port)
                .username(username)
                .password(password)
                .database(database)
                .build());
    }

}