import { useEffect, useState, Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { moviesReviews } from 'API/service';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { detailsId } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      try {
        const response = await moviesReviews(detailsId);
        setReviews(response.data.results);
      } catch (error) {
        setReviews([]);
      }
    };
    fetchMoviesReviews();
  }, [detailsId]);

  return (
    <>
      {reviews.length ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Reviews;
