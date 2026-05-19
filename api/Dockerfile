# Base image
FROM node:22-alpine

# Create app directory
WORKDIR /api

# Enable pnpm
RUN corepack enable

# Copy package files first (better layer caching)
COPY package*.json ./


# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Expose Fastify port
EXPOSE 3333

# Run development server
CMD ["pnpm", "run", "dev"]