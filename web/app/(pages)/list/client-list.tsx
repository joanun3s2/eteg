'use client';

import SearchInput from '@/components/ui/search-input';
import ClientListItem from './client-list-item';
import Divider from '@/components/ui/divider';
import { useMemo, useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getClients } from '@/lib/api/services/client-service';
import { Client } from '@/lib/api/types/client';

export default function ClientList() {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: getClients,
  });

  const filteredList = useMemo(() => {
    if (!data) return [];

    return data.filter((client: Client) =>
      client.fullname.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <form className='flex gap-4 items-center py-2'>
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
            onClick={() => setSearch('')}
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
        {filteredList &&
          filteredList.map((client, index) => (
            <div key={client.id} className='w-full'>
              <ClientListItem {...client} />
              {index !== filteredList.length - 1 && <Divider />}
            </div>
          ))}
      </div>
    </div>
  );
}
