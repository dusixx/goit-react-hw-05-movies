import { useImageGallery } from '@hooks';
import { array, bool, exact, func, number, string } from 'prop-types';
import { useRef } from 'react';
import { Item, List } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({
  data = [],
  onLoad,
  scrollBy,
  loader: Loader,
}) => {
  const listRef = useRef(null);
  const [showLoader] = useImageGallery({ listRef, onLoad, data, scrollBy });

  // duplicates are possible (eg. week trends -> id(87)).
  const hash = {};

  return (
    data.length > 0 && (
      <>
        <List ref={listRef}>
          {data.map(({ id, ...restProps }) => {
            if (hash[id]) {
              return null;
            }
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
