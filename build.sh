#!/bin/bash

./mvnw clean install $*

docker-compose -f docker/docker-compose.yml build
