import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import HomePage from './components/Home.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import RQSuperHeroPage from './components/RQSuperHero.page';
import ParallelQueriesPage from './components/ParallelQueries.page';
import DynamicParallelQueriesPage from './components/DynamicParallel.page';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-parallel">Parallel</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">DynamicParallel</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-dynamic-parallel" element={<DynamicParallelQueriesPage heroIds={[1, 3]} />} />

            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />

            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHeroPage />} />

            <Route path="/super-heroes" element={<SuperHeroesPage />} />

            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />

            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
