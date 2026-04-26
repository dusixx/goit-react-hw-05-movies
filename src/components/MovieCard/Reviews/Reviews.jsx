import { showError } from '@common';
import { LoadMoreBtn } from '@components/etc/LoadMoreBtn/LoadMoreBtn';
import { useAutoScroll } from '@hooks';
import { TmdbService } from '@services';
import { array, number, shape } from 'prop-types';
import { useRef, useState } from 'react';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { Container, Item, List, Title } from './Reviews.styled';

const srv = new TmdbService();

export const Reviews = ({ data: { id, results, total_pages } }) => {
  const [reviews, setReviews] = useState(results);
  const page = useRef(1);
  const listRef = useRef(null);

  useAutoScroll({ listRef, data: reviews, scrollBy: 1 });

  const handleLoadMoreClick = clickCount => {
    srv
      .getMovieReviews(id, { page: (page.current = clickCount) })
      .then(({ results }) => setReviews(cur => [...cur, ...results]))
      .catch(showError);
  };

  return (
    <Container>
      <Title>Reviews</Title>

      <List id="reviews" ref={listRef}>
        {reviews.map(({ id, ...rest }) => {
          return (
            <Item key={id}>
              <ReviewItem {...rest} />
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

Reviews.propType = {
  data: shape({
    id: number,
    results: array,
    total_pages: number,
  }),
};
