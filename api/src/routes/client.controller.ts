import {
  clientSelectSchema,
  clientInsertSchema,
  clients,
} from '@/db/schema/client';
import { createInsertSchema } from 'drizzle-zod';
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';

export const clientController: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/clients',
    {
      schema: {
        summary: 'Create a new client into the system',
        tags: ['Clients'],
        body: createInsertSchema(clients),
        response: {
          201: clientSelectSchema,
          500: z.object({ message: z.string() }),
        },
      },
    },
    async (request, reply) => {
      // console.log(request.body);
      // const schema = createInsertSchema(clients);

      // console.log(schema);

      // schema.parse({});

      const newClient = request.body;

      console.log(newClient);

      const client = await app.service.client.create(newClient as any);

      return reply.status(201).send(client);
    },
  );

  app.get(
    '/clients',
    {
      schema: {
        summary: 'Get all clients from the system',
        tags: ['Clients'],
        response: {
          200: z.array(clientSelectSchema),
          500: z.object({ message: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const clients = await app.service.client.findAll();

      return reply.send(clients);
    },
  );

  app.get(
    '/clients/:id',
    {
      schema: {
        summary: 'Get a client by id',
        tags: ['Clients'],
        params: z.object({ id: z.uuidv7() }),
        response: {
          200: clientSelectSchema,
          500: z.object({ message: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;

      const client = await app.service.client.findById(id);

      return reply.send(client);
    },
  );

  app.patch(
    '/clients/:id',
    {
      schema: {
        summary: 'Update a client by id',
        tags: ['Clients'],
        params: z.object({ id: z.uuidv7() }),
        body: clientInsertSchema.partial().strict(),
        response: {
          200: clientSelectSchema,
          500: z.object({ message: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;
      const data = request.body;

      const client = await app.service.client.updateById(id, data);

      return reply.send(client);
    },
  );

  app.delete(
    '/clients/:id',
    {
      schema: {
        summary: 'Delete a client by id',
        tags: ['Clients'],
        params: z.object({ id: z.uuidv7() }),
        response: {
          200: z.void(),
          500: z.object({ message: z.string() }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params;

      await app.service.client.deleteById(id);

      return reply.send();
    },
  );
};
