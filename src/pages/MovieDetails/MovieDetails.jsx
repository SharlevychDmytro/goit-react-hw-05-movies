import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { moviesInfo } from 'API/service';
import { Box } from 'components/Box';
import image from 'img/image-not-found.png';
import {
  Wraper,
  Overviev,
  Genres,
  Link,
  ListLink,
} from 'pages/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const { detailsId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMoviesInfo = async () => {
      try {
        const response = await moviesInfo(detailsId);
        setMovie(response.data);
        setIsLoad(true);
      } catch (error) {
        setIsLoad(false);
      }
    };
    fetchMoviesInfo();
  }, [detailsId]);

  const { poster_path, title, vote_average, overview, genres = [] } = movie;
  const validGenres = genres.map(genre => genre.name).join(' ');

  if (!isLoad) {
    return <div>Sorry, there was an error loading data.</div>;
  }

  return (
    <Box padding="20px 0px">
      <Link to={backLinkHref}>Back</Link>
      <Box display="flex">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : image
          }
          alt={`${title}`}
        />
        <Wraper>
          {' '}
          <h2>{title}</h2>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <div>
            <Overviev>Overviev</Overviev>
            <span>{overview}</span>
          </div>
          <div>
            <Genres>Genres</Genres>
            <span>{validGenres}</span>
          </div>
        </Wraper>
      </Box>
      <Box>
        <h2>Additional information</h2>
        <ListLink>
          <li>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Revievs
            </Link>
          </li>
        </ListLink>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
