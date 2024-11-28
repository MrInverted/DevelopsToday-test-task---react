import { Link } from 'react-router-dom';

interface IProps extends IAllData {
  index: number;
}



function ListItem({ name, countryCode, index }: IProps) {
  return (
    <li key={name} className='border flex'>
      <div className='w-12 sm:w-16 inline-flex justify-center items-center border-r shrink-0'>{index}</div>
      <div className='px-4 py-2'>{name}</div>
      <div className='border-l ml-auto shrink-0'>
        <Link to={"/" + countryCode} className='w-20 sm:w-28 h-full flex justify-center items-center hover:bg-black hover:text-white'>
          <span className='font-bold'>Visit</span>
        </Link>
      </div>
    </li>
  )
}

export default ListItem