import { useQuery } from '@tanstack/react-query';
import { getAll } from '../utils/utils';

import List from '../components/List';
import Loader from '../components/Loader';
import Error from '../components/Error';



function AllCountries() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["all"],
    queryFn: getAll,
    refetchOnWindowFocus: false,
    retry: 1
  });

  if (isLoading) return (<Loader />);

  if (isError) return (<Error />);

  if (!data) return (<Error text='No data was found...' />);

  return (
    <>
      <h1 className="text-xl font-bold mb-3">List of all available countries</h1>
      <List data={data.data} />
    </>
  )
}

export default AllCountries