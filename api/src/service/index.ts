import { ClientService } from './client.service';
import { Repositories } from '@/repository';

export function createServices(repositories: Repositories) {
  return {
    client: new ClientService(repositories.client),
  };
}

export type Services = ReturnType<typeof createServices>;
