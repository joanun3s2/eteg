import { LucideIcon } from 'lucide-react';

type formButtonProps = React.ComponentProps<'button'> & {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  icon?: LucideIcon;
  className?: string;
};

export default function FormButton({
  label,
  variant = 'primary',
  disabled = false,
  className,
  icon: Icon,
  ...props
}: formButtonProps) {
  const styles = {
    primary: 'bg-violet-600 text-white',
    secondary: 'bg-gray-100 border border-gray-300',
  };

  return (
    <div className='flex justify-center items-center'>
      <button
        {...props}
        className={[
          styles[variant],
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          'flex justify-center items-center p-2 rounded-xl font-bold w-full py-3',
          className,
        ].join(' ')}
      >
        {Icon && <Icon strokeWidth={3} className='w-5 h-5 mr-2' />}
        {label}
      </button>
    </div>
  );
}
