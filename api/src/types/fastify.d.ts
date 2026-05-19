import { database } from '@/db';
import { Repositories } from '@/repository';
import { Services } from '@/service';

declare module 'fastify' {
  interface FastifyInstance {
    db: typeof database;
    repository: Repositories;
    service: Services;
  }
}
