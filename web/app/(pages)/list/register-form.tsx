'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

const createClientSchema = z.object({
  fullname: z.string().min(3, 'Name must have at least 3 characters'),
  email: z.email('Invalid email'),
  cpf: z.string().min(11, 'CPF must have 11 digits'),
  favoriteColor: z.string().optional(),
  observations: z.string().optional(),
});

type CreateClientData = z.infer<typeof createClientSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClientData>({
    resolver: zodResolver(createClientSchema),
    mode: 'onChange',
  });

  async function onSubmit(data: CreateClientData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 max-w-md'
    >
      <div>
        <input
          placeholder='Full name'
          {...register('fullname')}
          className='border p-2 rounded w-full'
        />

        {errors.fullname && (
          <p className='text-red-500 text-sm'>{errors.fullname.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder='Email'
          {...register('email')}
          className='border p-2 rounded w-full'
        />

        {errors.email && (
          <p className='text-red-500 text-sm'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder='CPF'
          {...register('cpf')}
          className='border p-2 rounded w-full'
        />

        {errors.cpf && (
          <p className='text-red-500 text-sm'>{errors.cpf.message}</p>
        )}
      </div>

      <button type='submit' className='bg-violet-600 text-white p-2 rounded'>
        Register
      </button>
    </form>
  );
}
