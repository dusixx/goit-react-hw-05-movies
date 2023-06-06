import { useState, useRef } from 'react';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { ReviewCard } from './ReviewCard';
import { List, Container, Title, LoadMoreBtn } from './ReviewsList.styled';

const srv = new TmdbService();

export const ReviewList = ({ data: { id, results, total_pages } }) => {
  const [reviews, setReviews] = useState(results);
  const page = useRef(1);

  // useEffect(() => window.scrollBy({ top: 500, behavior: 'smooth' }), [reviews]);

  const handleLoadMoreClick = () => {
    page.current += 1;
    srv
      .getMovieReviews(id, { page: page.current })
      .then(({ results }) => {
        setReviews(cur => [...cur, ...results]);
      })
      .catch(showError);
  };

  return (
    <Container>
      <Title>Reviews</Title>
      <List id="reviews">
        {reviews.map(({ id, ...rest }) => {
          return (
            <li key={id}>
              <ReviewCard {...rest} />
            </li>
          );
        })}
      </List>
      {total_pages > 0 && page.current < total_pages && (
        <LoadMoreBtn onClick={handleLoadMoreClick}>Load more</LoadMoreBtn>
      )}
    </Container>
  );
};
