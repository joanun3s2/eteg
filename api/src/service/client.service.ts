import { clients } from '@/db/schema';
import { BaseService } from './base/base.service';
import { ClientRepository } from '@/repository/client.repository';

export class ClientService extends BaseService<typeof clients> {
  constructor(repository: ClientRepository) {
    super(repository, clients);
  }
}
