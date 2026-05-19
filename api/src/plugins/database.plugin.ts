import fp from 'fastify-plugin';
import { database } from '@/db';

export default fp(async (fastify) => {
  fastify.decorate('db', database);
});
