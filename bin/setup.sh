#!/usr/bin/env bash

echo "Starting setup..."

echo "Creating .env file for api..."

cp api/.env.example api/.env

if [ "$(docker ps -q -f name=eteg_db)" ]; then
  docker compose down
fi

echo "Starting containers..."

docker compose up --build -d postgres

echo "Running database initialization..."

docker compose up db_init

echo "Starting api and web..."

docker compose up -d api web

echo "Setup complete!"