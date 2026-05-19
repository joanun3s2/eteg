import { database } from '.';
import { clients, InsertClient } from './schema/client';

async function seed() {
  const clientSeed: InsertClient[] = [
    {
      fullname: 'John Doe',
      cpf: '54883268047',
      email: 'john@eteg.com',
      favoriteColor: '#278BF5',
      observations: 'first entry',
    },
    {
      fullname: 'Joao "Nunes"',
      cpf: '02073100090',
      email: 'joao@eteg.com',
      favoriteColor: '#27F580',
    },
  ];

  try {
    await database.insert(clients).values(clientSeed).returning();
  } catch (error) {
    console.log(error);
  }

  console.log('Database seeded!');
  process.exit(0);
}

seed();
