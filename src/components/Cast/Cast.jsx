import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { moviesCast } from 'API/service';
import image from 'img/image-not-found.png';
import { List } from 'components/Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { detailsId } = useParams();

  useEffect(() => {
    const fetchMoviesCast = async () => {
      try {
        const response = await moviesCast(detailsId);
        setCast(response.data.cast);
      } catch (error) {
        setCast([]);
      }
    };
    fetchMoviesCast();
  }, [detailsId]);

  return (
    <>
      <List>
        {cast.map(({ id, name, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : image
              }
              alt={name}
            />
            <h3>{name}</h3>
          </li>
        ))}
      </List>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Cast;
