import { useRef } from 'react';
import { func, array, exact, string, bool, number } from 'prop-types';
import { List, Item } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem/MovieGalleryItem';
import { useImageGallery } from '../../hooks';

//
// MovieGallery
//

const MovieGallery = ({
  data = [],
  sortOptions,
  onLoad,
  scrollBy,
  loader: Loader,
}) => {
  const listRef = useRef(null);
  const [showLoader] = useImageGallery({ listRef, onLoad, data, scrollBy });

  // !! На week-трендах повторился фильм (id==87).
  // Запоминаем id, чтобы избежать дублирования
  const hash = {};

  return (
    data.length > 0 && (
      <>
        <List ref={listRef}>
          {data.map(({ id, ...restProps }) => {
            if (hash[id]) return null;
            hash[id] = true;

            return (
              <Item key={id}>
                <MovieGalleryItem id={id} {...restProps} />
              </Item>
            );
          })}
        </List>
        {showLoader && Loader}
      </>
    )
  );
};

MovieGallery.propTypes = {
  data: array,
  onLoad: func,
  Loader: func,
  scrollBy: number,
  sortOptions: exact({
    key: string,
    ascending: bool,
  }),
};

export default MovieGallery;
