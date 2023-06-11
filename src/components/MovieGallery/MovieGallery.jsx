import { useEffect } from 'react';
import { List, Item } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem';

const MovieGallery = ({ data = [], sortOptions }) => {
  // !! На трендах недели повторился фильм (id==87).
  // Запоминаем id, чтобы избежать дублирования
  const hash = {};

  return (
    data.length > 0 && (
      <List>
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
    )
  );
};

export default MovieGallery;
