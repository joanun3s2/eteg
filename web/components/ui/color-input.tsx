import { useState } from 'react';

type FormInputProps = React.ComponentProps<'input'> & {
  label: string;
  placeholder?: string;
};
export default function ColorInput({
  label,
  className,
  ...props
}: FormInputProps) {
  const [color, setColor] = useState('#000000');

  return (
    <div className={[className, 'my-3'].join(' ')}>
      <label htmlFor='name' className='font-bold'>
        {label}
      </label>

      <div className='border border-gray-300 p-2 rounded-lg mt-3 py-3 px-4 min-h-14 w-full flex gap-4'>
        <input
          type='color'
          {...props}
          className='rounded-lg border-none'
          onChange={(event) => setColor(event.target.value)}
        />

        <span className='text-gray-500 flex items-center justify-center'>
          {color}
        </span>
      </div>
    </div>
  );
}
