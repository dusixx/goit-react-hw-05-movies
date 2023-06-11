import { useEffect, useState, useRef } from 'react';
import { func, array, exact, string, bool, number } from 'prop-types';
import { List, Item } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem';
import { onImageLoad as onLastImageLoad } from 'utils';

const DEF_SCROLL_BEHAVIOR = 'smooth';
const DEF_AUTOSCROLL = 1;

const MovieGallery = ({
  data = [],
  sortOptions,
  onLoad,
  autoscroll,
  loader: Loader,
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const onLoadRef = useRef(onLoad);
  const listRef = useRef(null);

  // полагаем, что галерея загружена,
  // если загружено последнее изображение (не lazy)
  useEffect(() => {
    setShowLoader(true);
    const imgs = listRef.current?.querySelectorAll('img');

    if (imgs) {
      const lastImage = imgs[imgs.length - 1];
      const listRect = listRef.current.getBoundingClientRect();

      onLastImageLoad(lastImage, () => {
        setShowLoader(false);
        onLoadRef.current && onLoadRef.current();

        // скролим вниз на высоту одного изображения, полагая, что
        // высота всех изображений в галерее одинакова
        // Не скролим, если топ галереи в пределах вьюпорта
        if (listRect?.top < 0) {
          window.scrollBy({
            top: lastImage.height * (parseInt(autoscroll) || DEF_AUTOSCROLL),
            behavior: DEF_SCROLL_BEHAVIOR,
          });
        }
      });
    } else {
      setShowLoader(false);
    }
  }, [data, autoscroll]);

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
  autoscroll: number,
  sortOptions: exact({
    key: string,
    ascending: bool,
  }),
};

export default MovieGallery;
