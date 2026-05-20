type ClientListItemProps = {
  id: string;
  fullname: string;
  email: string;
  cpf: string;
  favoriteColor?: string;
  observations?: string;
};

export default function ClientListItem(item: ClientListItemProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 justify-between items-center py-2 w-full gap-30 px-6 py-5'>
      <p className='font-bold'>{item.fullname}</p>
      <p className='text-gray-500 text-sm'>{item.email}</p>
      <p className='text-gray-500 text-sm'>{item.cpf}</p>

      <p className='font-bold'>{item.observations}</p>

      <div
        className='w-8 h-8 rounded-full'
        style={{ backgroundColor: item.favoriteColor }}
      />
    </div>
  );
}
