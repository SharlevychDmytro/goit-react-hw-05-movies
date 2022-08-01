import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { requestPopularMovies } from 'API/service';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrend() {
      try {
        const response = await requestPopularMovies();
        const results = response.data.results;
        setMovies(results);
      } catch (error) {
        setMovies([]);
      }
    }
    fetchTrend();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>{' '}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
