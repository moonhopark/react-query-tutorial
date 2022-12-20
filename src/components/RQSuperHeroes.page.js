import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes1');
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>;
      {data?.data.map((hero) => {
        return <di0 key={hero.name}>{hero.name}</di0>;
      })}
    </>
  );
};

export default RQSuperHeroesPage;
