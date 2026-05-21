# Eteg

Eteg is a client registration form for John Doe's company.

## Technologies & Libraries

### Monorepo (Source)

- **pnpm** - Package manager and workspace management
- **Node.js v22** - Runtime environment

### API

- **Fastify** - Web framework
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **PostgreSQL** - Relational database
- **Docker** - Containerization (currently for database, API containerization planned for the future)
- **TypeScript** - Type-safe JavaScript
- **Zod** - Schema validation
- **tsx** - TypeScript execution for development

#### API Dependencies

- `@fastify/cors` - CORS support
- `@fastify/swagger` - API documentation
- `@scalar/fastify-api-reference` - Interactive API reference
- `fastify-type-provider-zod` - Zod type provider for Fastify
- `drizzle-zod` - Drizzle ORM and Zod integration
- `pg` - PostgreSQL client
- `uuidv7` - UUID v7 generation

#### WEB Dependencies

- `next` - A React based framework
- `react` - A typescript framework for web applications
- `@tanstack/react-query` - Powerful asynchronous state management
- `lucide-react` - A pack of customizable icons
- `react-hook-form` - Form handling lib
- `sonner` - Toast component for React
- `zod` - TypeScript-first validation library

## Initial Setup

### Quick Setup

To set up the project quickly, run the setup script on root directory:

```bash
npm run setup
```

This script will:

1. Create a `.env` `.env.local` files from their respective `.env.example`
2. Stop any existing Docker containers
3. Start the PostgreSQL database container
4. Generate database migrations
5. Run database migrations
6. Seed the database with initial data
7. Start the development API and WEB server

### Manual Setup API

Alternatively, you can set up the API manually by executing the following scripts from the `api` directory:

#### 1. Install Dependencies

```bash
pnpm install
```

#### 2. Environment Configuration

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

#### 3. Start Database

The database runs in a Docker container. Start it with:

```bash
docker compose up -d postgres
```

#### 4. Synchronize Database

```bash
pnpm run db:push
```

Synchronize models with database skipping the need of generate and migrate.

#### 6. Seed Database

```bash
pnpm run db:seed
```

Populates the database with initial/seed data for development and testing.

#### 7. Start Development Server

API runs on a dock container, you can start by running:

```bash
pnpm run start
```

Starts the development server with hot-reload using `tsx watch`.

### Available Scripts

- `dev` - Start the development server with hot-reload
- `start` - Start the development server in a docker container
- `db:generate` - Generate database migration files from schema
- `db:migrate` - Apply database migrations
- `db:studio` - Open Drizzle Studio (database GUI)
- `db:seed` - Seed the database with initial data
- `db:push` - Synchronize models with database skipping the need of generate and migrate

## Database

The PostgreSQL database runs in a Docker container. The container configuration is defined in `api/docker-compose.yaml`. The database is accessible on port `5432` by default.

### Manual Setup WEB

#### 1. Install Dependencies

```bash
npm install
```

#### 2. Environment Configuration

Create a `.env.local` file from `.env.example`:

```bash
cp .env.example .env.local
```

#### 3. Start the web app

Simply run:

```bash
npm run start
```
