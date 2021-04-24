#!/bin/bash
if [ "$#" -eq 1 ]; then
   if [ $1 = "-postgres-only" ]; then
        docker-compose -f ./docker/docker-compose-postgres.yml up
   else
      echo "Illegal argument, usage: start.sh [-postgres-only]"
   fi
else
  docker-compose -f ./docker/docker-compose.yml up
fi
