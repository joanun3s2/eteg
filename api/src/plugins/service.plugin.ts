import fp from 'fastify-plugin';
import { createServices } from '@/service';

export default fp(async (fastify) => {
  fastify.decorate('service', createServices(fastify.repository));
});
