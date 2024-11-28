import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import { getOne } from '../utils/utils';

import List from '../components/List';
import Chart from '../components/Chart';
import Loader from '../components/Loader';
import Error from '../components/Error';

interface IParams {
  countryCode: string;
  [key: string]: string | undefined;
}



function OneCountry() {
  const { countryCode } = useParams<IParams>();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["single", countryCode],
    queryFn: getOne.bind(null, countryCode!),
    refetchOnWindowFocus: false,
    retry: 1
  });

  if (isLoading) return (<Loader />);

  if (isError) return (<Error text='No information about this country is available' />);

  if (!data) return (<Error text='No data was found...' />);

  const { officialName, flagUrl, borders, population } = data.data;

  const bordersToList = borders.map(({ officialName, countryCode }) => ({
    countryCode: countryCode,
    name: officialName
  }))

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex items-center gap-2">
        <h1 className='text-xl font-bold'>{officialName}</h1>
        <img className='h-8' src={flagUrl} alt={officialName + " flag"} />

        <Link to="/" className='ml-auto self-end font-bold hover:opacity-50'>To all countries</Link>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-bold'>List of borders</h2>
        <List data={bordersToList} />
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-lg font-bold'>Chart of population</h2>
        <Chart data={population} />
      </div>
    </div>
  )
}

export default OneCountry