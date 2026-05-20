'use client';

import ColorInput from '@/components/ui/color-input';
import FormButton from '@/components/ui/form-button';
import FormInput from '@/components/ui/form-input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const createClientSchema = z.object({
  fullname: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
  email: z.email('Email inválido'),
  cpf: z.string().min(11, 'CPF deve ter 11 dígitos'),
  favoriteColor: z.string().optional(),
  observations: z.string().optional(),
});

type CreateClientData = z.infer<typeof createClientSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateClientData>({
    resolver: zodResolver(createClientSchema),
    mode: 'onChange',
  });

  async function onSubmit(data: CreateClientData) {
    console.log(data);
    reset();
  }

  function resetForm() {
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-1 md:grid-cols-2 gap-4'
    >
      <FormInput
        label='Nome completo'
        mandatory={true}
        {...register('fullname', { required: true })}
        error={errors.fullname?.message}
      />

      <FormInput
        label='Email'
        mandatory={true}
        {...register('email', { required: true })}
        error={errors.email?.message}
      />

      <FormInput
        label='CPF'
        mandatory={true}
        {...register('cpf', { required: true })}
        error={errors.cpf?.message}
      />

      <ColorInput label='Cor favorita' {...register('favoriteColor')} />

      <FormInput
        className='md:col-span-2'
        label='Observações'
        {...register('observations')}
        error={errors.observations?.message}
      />

      <FormButton label='Limpar' variant='secondary' onClick={resetForm} />
      <FormButton
        type='submit'
        label='Cadastrar'
        disabled={!isValid}
        icon={Save}
      />
    </form>
  );
}
