#!/usr/bin/env bash

echo "Starting setup..."

echo "Creating .env file..."
cp .env.example .env

if [ "$(docker ps -q -f name=eteg_db)" ]; then
  docker compose down
fi


echo "Creating database..."
docker compose up -d postgres

sleep 5

echo "Initializing database..."
docker compose up -d db_init

sleep 5

echo "Creating server..."

docker compose up --build
