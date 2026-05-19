import { and, eq, isNull } from 'drizzle-orm';
import { PgTableWithColumns } from 'drizzle-orm/pg-core';
import * as schema from '@/db/schema';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export abstract class BaseRepository<TTable extends PgTableWithColumns<any>> {
  protected constructor(
    protected readonly db: PostgresJsDatabase<typeof schema>,
    protected readonly table: TTable,
  ) {}

  async findById(id: string): Promise<TTable['$inferSelect'] | null> {
    const result = await this.db
      .select()
      .from(this.table)
      .where(eq(this.table.id, id))
      .limit(1);

    return result[0] ?? null;
  }

  async findAll(): Promise<TTable['$inferSelect'][] | null> {
    return await this.db.select().from(this.table);
  }

  async create(
    data: typeof this.table.$inferInsert,
  ): Promise<TTable['$inferSelect'] | null> {
    const result = await this.db.insert(this.table).values(data).returning();

    return result[0];
  }

  async updateById(
    id: string,
    data: typeof this.table.$inferInsert,
  ): Promise<TTable['$inferSelect'] | null> {
    const result = await this.db
      .update(this.table)
      .set(data)
      .where(eq(this.table.id, id))
      .returning();

    return result[0];
  }

  async deleteById(id: string) {
    await this.db
      .update(this.table)
      .set({ deletedAt: new Date() })
      .where(and(eq(this.table.id, id), isNull(this.table.deletedAt)));
  }
}
