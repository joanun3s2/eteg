import { BaseRepository } from '@/repository/base/base.repository';
import {
  CreationFailedError,
  NotFoundError,
} from '@/utils/erros/domain.errors';
import { PgTableWithColumns } from 'drizzle-orm/pg-core';

export abstract class BaseService<TTable extends PgTableWithColumns<any>> {
  constructor(
    protected readonly repository: BaseRepository<TTable>,
    protected readonly table: TTable
  ) {}

  async findById(id: string): Promise<TTable['$inferSelect']> {
    const result = await this.repository.findById(id);

    if (!result) {
      throw new NotFoundError();
    }

    return result;
  }

  async findAll(): Promise<TTable['$inferSelect'][]> {
    const result = await this.repository.findAll();

    if (!result) {
      throw new NotFoundError();
    }

    return result;
  }

  async create(
    data: typeof this.table.$inferInsert
  ): Promise<TTable['$inferSelect']> {
    const result = await this.repository.create(data);

    if (!result) {
      throw new CreationFailedError();
    }

    return result;
  }

  async updateById(
    id: string,
    data: typeof this.table.$inferInsert
  ): Promise<TTable['$inferSelect']> {
    const result = await this.repository.updateById(id, data);

    if (!result) {
      throw new NotFoundError();
    }

    return result;
  }

  async deleteById(id: string) {
    const result = await this.repository.findById(id);

    if (!result) {
      throw new NotFoundError();
    }

    return await this.repository.deleteById(id);
  }
}
