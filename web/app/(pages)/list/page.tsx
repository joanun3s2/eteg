'use client';
import FormButton from '@/components/ui/form-button';
import ClientList from './client-list';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function List() {
  const router = useRouter();
  return (
    <div className='bg-transparent grid grid-cols-1 gap-10 px-30 py-15'>
      <div className='flex w-full items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold'>Clientes</h2>
          <p className='opacity-50'>Veja e gerencie os clientes cadastrados</p>
        </div>
        <div>
          <FormButton
            label='Registar novo cliente'
            className='px-5'
            icon={Plus}
            onClick={() => router.push('/register')}
          />
        </div>
      </div>
      <div className='rounded-xl bg-white p-10 border border-border'>
        <ClientList />
      </div>
    </div>
  );
}
