import { useState, useRef } from 'react';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { ReviewCard } from './ReviewCard';
import { List, Container, Title, Item } from './ReviewsList.styled';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';

const srv = new TmdbService();

export const ReviewList = ({ data: { id, results, total_pages } }) => {
  const [reviews, setReviews] = useState(results);
  const page = useRef(1);

  const handleLoadMoreClick = clickCount => {
    page.current = clickCount;
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
            <Item key={id}>
              <ReviewCard {...rest} />
            </Item>
          );
        })}
      </List>
      {total_pages > 0 && page.current < total_pages && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
    </Container>
  );
};
