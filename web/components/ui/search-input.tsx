import { Search } from 'lucide-react';

type SearchInputProps = React.ComponentProps<'input'> & {
  placeholder?: string;
};

export default function SearchInput({
  placeholder,
  className,
  ...props
}: SearchInputProps) {
  return (
    <div
      className={[
        className,
        'my-3 flex border border-gray-300 justify-center items-center gap-2 px-4 rounded-lg',
      ].join(' ')}
    >
      <Search color='#9a9996' />
      <input
        placeholder={placeholder}
        {...props}
        className=' p-2 py-3 px-1 min-h-14 w-full focus:outline-none'
      />
    </div>
  );
}
