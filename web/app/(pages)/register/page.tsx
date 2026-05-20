import Image from 'next/image';
import register from '../../../resources/images/register.png';
import RegisterForm from './register-form';

export default function Register() {
  return (
    <div className='bg-transparent flex flex-col items-center gap-6 my-6'>
      <div className='flex items-center gap-15'>
        <div>
          <Image src={register} width={200} height={200} alt='logo' />
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Cadastrar um novo cliente</h2>
          <p className='opacity-50'>
            Preencha os campos abaixo para cadastrar um novo cliente.
          </p>
        </div>
      </div>
      <div className='rounded-xl bg-white p-10 border border-border'>
        <RegisterForm />
      </div>
    </div>
  );
}
