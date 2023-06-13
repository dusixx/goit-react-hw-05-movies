import { useEffect, useState, useRef } from 'react';
import { func, array, exact, string, bool, number } from 'prop-types';
import { List, Item } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem';
import { onImageLoad } from 'utils';

const DEF_SCROLL_BEHAVIOR = 'smooth';
const DEF_SCROLL_BY = 1.5;

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
  const [showLoader, setShowLoader] = useState(false);
  const onLoadRef = useRef(onLoad);
  const listRef = useRef(null);
  const listItemHeight = useRef(null);
  const curDataLen = useRef(null);

  useEffect(() => {
    listItemHeight.current =
      listRef.current.firstElementChild?.getBoundingClientRect().height;
  }, []);

  // полагаем, галерея загружена,
  // если загружено последнее изображение(не lazy)
  useEffect(() => {
    const imgs = listRef.current.querySelectorAll('img');
    const listTop = listRef.current?.getBoundingClientRect().top;

    if (imgs.length) {
      setShowLoader(true);
      const lastImage = imgs[imgs.length - 1];

      // вычисляем тут, в колбеке уже будут равны
      // (curDataLen.current === data.length)
      const shouldAutoscroll = listTop < 0 && curDataLen.current < data.length;

      onImageLoad(lastImage, () => {
        setShowLoader(false);
        onLoadRef.current && onLoadRef.current();

        // полагаем, высота всех изображений в галерее одинаковая
        if (shouldAutoscroll) {
          window.scrollBy({
            top: listItemHeight.current * (parseInt(scrollBy) || DEF_SCROLL_BY),
            behavior: DEF_SCROLL_BEHAVIOR,
          });
        }
      });
    }
    // запоминаем текущее
    curDataLen.current = data.length;
  }, [data, scrollBy]);

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
