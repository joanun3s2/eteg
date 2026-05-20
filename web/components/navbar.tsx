import { CircleUser, List, UserPlus, Users } from 'lucide-react';
import Link from 'next/link';
import NavItem from './ui/nav-item';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center bg-white min-h-[30px] shadow-lg rounded-[8px] p-5'>
      <nav className='flex gap-4 '>
        <Link href='/'>
          <NavItem name='John Doe' icon={Users} variant='secondary' />
        </Link>
        <Link href='/register'>
          <NavItem name='Register' icon={UserPlus} />
        </Link>
        <Link href='/list'>
          <NavItem name='List' icon={List} />
        </Link>
      </nav>

      <Link
        href='https://github.com/joanun3s2/eteg'
        about='github'
        target='_blank'
      >
        <CircleUser strokeWidth={2} className='w-10 h-10' color='indigo' />
      </Link>
    </div>
  );
}
