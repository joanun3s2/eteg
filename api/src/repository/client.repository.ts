import { clients } from '@/db/schema/client';
import { BaseRepository } from './base/base.repository';
import { database } from '@/db';

export class ClientRepository extends BaseRepository<typeof clients> {
  constructor(db: typeof database) {
    super(db, clients);
  }
}
