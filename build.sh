#!/bin/bash

./mvnw -X clean install $*

docker-compose -f docker/docker-compose.yml build
