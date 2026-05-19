import { pgTable, text } from 'drizzle-orm/pg-core';
import { baseSchema } from './base/baseSchema';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const clients = pgTable('clients', {
  ...baseSchema,
  fullname: text().notNull(),
  cpf: text().notNull().unique(),
  email: text().notNull(),
  favoriteColor: text(),
  observations: text(),
});

export type InsertClient = typeof clients.$inferInsert;
export type CLient = typeof clients.$inferSelect;
export const clientSelectSchema = createInsertSchema(clients);
export const clientInsertSchema = createSelectSchema(clients);
