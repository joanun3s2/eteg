import { defineConfig } from 'drizzle-kit';
import path from 'path';

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schema: path.resolve(process.cwd(), 'src/db/schema/index.ts'),
  out: path.resolve(process.cwd(), 'src/db/migrations'),
  casing: 'camelCase',
});
