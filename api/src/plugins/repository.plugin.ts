import fp from 'fastify-plugin';
import { createRepositories } from '@/repository';

export default fp(async (fastify) => {
  fastify.decorate('repository', createRepositories(fastify.db));
});
