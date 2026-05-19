import { LucideIcon } from 'lucide-react';

type navItemProps = {
  name: string;
  icon: LucideIcon;
  variant?: 'primary' | 'secondary';
};

export default function NavItem({
  name,
  icon: Icon,
  variant = 'primary',
}: navItemProps) {
  return (
    <div className='flex justify-center items-center'>
      <div
        className={[
          variant === 'secondary' ? 'bg-violet-500 rounded-[8px]' : '',
          'flex justify-center items-center p-2',
        ].join(' ')}
      >
        <Icon strokeWidth={variant === 'primary' ? 2 : 3} className='w-5 h-5' />
      </div>
      <div className={variant === 'secondary' ? 'font-bold px-2' : 'px-1'}>
        {name}
      </div>
    </div>
  );
}
