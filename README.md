[comment]: <> ([![CircleCI]&#40;https://circleci.com/gh/pictet-technologies-open-source/reactive-todo-list/tree/main.svg?style=shield&circle-token=90b39e6ac2420e2e4e4991cc34325c1ca74fa263&#41;]&#40;https://circleci.com/gh/pictet-technologies-open-source/reactive-todo-list&#41;)

[comment]: <> ([![CodeFactor]&#40;https://www.codefactor.io/repository/github/pictet-technologies-open-source/reactive-todo-list/badge?s=88d8b4d1338a9d7d41b62e825d1f2d1a61fe6ee4&#41;]&#40;https://www.codefactor.io/repository/github/pictet-technologies-open-source/reactive-todo-list&#41;)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Made with Love by Pictet Technologies](https://img.shields.io/badge/Made%20with%20love%20by-Pictet%20Technologies-ff3434.svg)](https://pictet-technologies.com/)

# Reactive Todo List with PostgreSQL and R2DBC

This project aims to explain how to build a fully reactive application with Spring Boot, Spring Webflux, Angular, PostgreSQL and R2DBC.
It demonstrates how to deal with concurrent modifications using optimistic locking, PostgreSQL Listen/Notify and Server Sent Events.

### Project structure


Folder                    | Description                                                  
--------------------------|--------------------------------------------------------------
docker                    | Contains the docker-compose.yml used to setup the application 
todo-list-application     | Spring boot application (back-end) 
todo-list-ui              | Angular application (front-end)
 

### Local environment

#### Build the application

In order to build the application you need to have the following softwares installed:
- open JDK or oracle JDK >= 8
- docker & docker compose
- npm

```
$ build.sh
```

#### Start the application

```
$ start.sh
```

Once the application is started you can access it using the following links : 

Name                      | Link                                                  
--------------------------|--------------------------------------------------------------
UI                        | http://localhost:8080
Swagger UI                | http://localhost:8080/swagger-ui/#/item-controller
PgAdmin                   | http://localhost:5050/


If you only want to start postgres, execute the following command

```
$ start.sh -postgres-only
```

#### Stop the application

```
$ stop.sh
```


### Production environment

#### Build the application

You need to have docker installed to build the application.

Ensure that the URL of the application has been correctly configured in the following file.

```
todo-list-ui/src/app/environments/environment.prod.ts
```

Then build the application in production mode.

```
$ mvnw clean install -Pprod
```
