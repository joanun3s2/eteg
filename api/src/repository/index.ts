import { database } from '@/db';
import { ClientRepository } from './client.repository';

export function createRepositories(db: typeof database) {
  return {
    client: new ClientRepository(db),
  };
}

export type Repositories = ReturnType<typeof createRepositories>;
