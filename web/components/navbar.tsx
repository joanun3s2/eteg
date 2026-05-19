import { Home, List, UserPlus, Users } from 'lucide-react';
import Link from 'next/link';
import NavItem from './ui/nav-item';

export default function Navbar() {
  return (
    <nav className='flex gap-4 bg-[#8E27F5] min-h-[30px] shadow-lg rounded-[8px] p-5'>
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
  );
}
