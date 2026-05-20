type FormInputProps = React.ComponentProps<'input'> & {
  label: string;
  placeholder?: string;
  mandatory?: boolean;
  error?: string;
};
export default function FormInput({
  label,
  placeholder,
  mandatory = false,
  error,
  className,
  type,
  ...props
}: FormInputProps) {
  return (
    <div className={[className, 'my-3'].join(' ')}>
      <label htmlFor='name' className='font-bold'>
        {label}
        {mandatory && <span className='text-red-500 ml-1'>*</span>}
      </label>

      <input
        placeholder={placeholder ?? label}
        type={type ?? 'text'}
        {...props}
        className='border border-gray-300 p-2 rounded-lg mt-3 py-3 px-4 min-h-14 w-full'
      />

      {type === 'color' && (
        <p className='text-gray-500 text-sm px-2 py-1'>
          Clique para selecionar a cor
        </p>
      )}

      {error && <p className='text-red-300 text-sm px-2 py-1'>{error}</p>}
    </div>
  );
}
