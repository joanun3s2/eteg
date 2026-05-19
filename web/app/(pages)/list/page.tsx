import Image from 'next/image';
import register from '../../../resources/images/register.png';
import RegisterForm from './register-form';

export default function List() {
  return (
    <div className='bg-transparent flex flex-col items-center gap-20 my-10'>
      <div className='flex items-center gap-15'>
        <div>
          <Image src={register} width={200} height={200} alt='logo' />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Registre um novo cliente</h2>
          <p className='opacity-50'>
            Preencha os campos abaixo para registrar um novo cliente.
          </p>
        </div>
      </div>
      <div className='rounded-xl bg-white p-10 border border-border'>
        <RegisterForm />
      </div>
    </div>
  );
}
