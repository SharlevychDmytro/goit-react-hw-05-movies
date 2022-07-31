import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { moviesInfo } from 'API/service';
import { Box } from 'components/Box';
import image from 'img/image-not-found.png';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { detailsId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMoviesInfo = async () => {
      try {
        const response = await moviesInfo(detailsId);
        setMovie(response.data);
      } catch (error) {
        setMovie({});
      }
    };
    fetchMoviesInfo();
  }, [detailsId]);

  const { poster_path, title, vote_average, overview, genres = [] } = movie;
  const validGenres = genres.map(genre => genre.name).join(' ');

  return (
    <>
      <Box>
        <Link to={backLinkHref}>Back</Link>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : image
          }
          alt={`${title}`}
        />
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <div>
          <p>Overviev</p>
          <span>{overview}</span>
        </div>
        <div>
          <p>Genres</p>
          <span>{validGenres}</span>
        </div>
      </Box>
      <Box>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Revievs</Link>
          </li>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};
