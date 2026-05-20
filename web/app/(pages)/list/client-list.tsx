'use client';

import SearchInput from '@/components/ui/search-input';
import ClientListItem from './client-list-item';
import Divider from '@/components/ui/divider';
import { useState } from 'react';
import { RefreshCcw } from 'lucide-react';

const clients = [
  {
    id: '1',
    fullname: 'John Doe',
    cpf: '54883268047',
    email: 'john@eteg.com',
    favoriteColor: '#278BF5',
    observations: 'first entry',
  },
  {
    id: '2',
    fullname: 'joao lima',
    cpf: '54883268047',
    email: 'joao@email.com',
    favoriteColor: '#7627f5ff',
    observations: 'second entry',
  },
  {
    id: '3',
    fullname: 'jonny morango',
    cpf: '54883268047',
    email: 'jonny@eteg.com',
    favoriteColor: '#f58427ff',
    observations: '',
  },
  {
    id: '4',
    fullname: 'maria januario',
    cpf: '54883268047',
    email: 'maria@eteg.com',
    favoriteColor: '#1b9b0aff',
    observations: 'test',
  },
  {
    id: '5',
    fullname: 'jose dias',
    cpf: '54883268047',
    email: 'jose@eteg.com',
    favoriteColor: '',
    observations: '',
  },
];

export default function ClientList() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(clients);

  const handleSearch = (value: string) => {
    setList(
      clients.filter((client) =>
        client.fullname.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  return (
    <div>
      <form
        className='flex gap-4 items-center py-2'
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(search);
        }}
      >
        <SearchInput
          placeholder='Pesquisar clientes...'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search && (
          <RefreshCcw
            strokeWidth={2}
            color='gray'
            className='w-5 h-5 cursor-pointer'
            onClick={() => {
              setSearch('');
              setList(clients);
            }}
          />
        )}
      </form>
      <div className='flex flex-col justify-between items-center w-full border border-border rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-5 justify-between items-center py-2 w-full gap-30 bg-gray-100 px-6 py-5'>
          <p className='font-bold text-gray-500'>Nome</p>
          <p className='font-bold text-gray-500'>Email</p>
          <p className='font-bold text-gray-500'>CPF</p>
          <p className='font-bold text-gray-500'>Observações</p>
          <p className='font-bold text-gray-500'>Cor favorita</p>
        </div>
        {list.map((client, index) => (
          <div key={index} className='w-full'>
            <ClientListItem {...client} />
            {index !== clients.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
}
