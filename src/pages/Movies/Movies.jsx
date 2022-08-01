import { useState, useEffect, Suspense } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Outlet, useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'API/service';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query) {
      searchMovies(query)
        .then(resp => resp)
        .then(data => setMovies(data.data.results))
        .catch(() => setMovies([]));
    }
  }, [searchParams]);

  const onSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
