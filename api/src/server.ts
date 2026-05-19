import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import { fastifyCors } from '@fastify/cors';
import ScalarApiReference from '@scalar/fastify-api-reference';
import { env } from './env';
import databasePlugin from './plugins/database.plugin';
import repositoryPlugin from './plugins/repository.plugin';
import { clientController } from './routes/client.controller';
import servicePlugin from './plugins/service.plugin';
import { errorHandler } from './plugins/errorHandler.plugin';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  // credentials: true,
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Eteg API',
      description: 'API for creating and managing clients for John Doe',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
});

app.register(ScalarApiReference, {
  routePrefix: '/docs',
});

// Register error handler
app.setErrorHandler(errorHandler);

// Register plugins
app.register(databasePlugin);
app.register(repositoryPlugin);
app.register(servicePlugin);

// Register Routes
app.register(clientController);

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`HTTP server running on http://localhost:${env.PORT}`);
  console.log(`Docs available at http://localhost:${env.PORT}/docs`);
});
