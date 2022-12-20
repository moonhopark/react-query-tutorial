import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const RQSuperHeroesPage = () => {
  const [refetchInterval, setRefetchInterval] = useState(3000);

  const onSuccess = (data) => {
    console.log('Perform side effect after data fetching', data);
    if (data.data.length === 4) {
      return setRefetchInterval(false);
    } else {
      return refetchInterval;
    }
  };

  const onError = (error) => {
    console.log('Perform side effect after encountering error', error);
    if (error) {
      setRefetchInterval(false);
    }
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
    refetchInterval,
  });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
