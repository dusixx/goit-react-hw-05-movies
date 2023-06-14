import { useRef, useState, useEffect } from 'react';
import { onImageLoad } from 'utils';

const DEF_SCROLL_BEHAVIOR = 'smooth';
const DEF_SCROLL_BY = 1.5;

export const useMovieGallery = ({ listRef, onLoad, data, scrollBy }) => {
  const [showLoader, setShowLoader] = useState(false);
  const onLoadRef = useRef(onLoad);
  const listItemHeight = useRef(null);
  const curDataLen = useRef(null);

  useEffect(() => {
    listItemHeight.current =
      listRef.current?.firstElementChild?.getBoundingClientRect().height;
  }, [listRef]);

  // полагаем, галерея загружена,
  // если загружено последнее изображение(не lazy)
  useEffect(() => {
    const imgs = listRef.current.querySelectorAll('img');

    if (imgs.length) {
      setShowLoader(true);
      const lastImage = imgs[imgs.length - 1];

      // тут, в колбеке уже будут равны (curDataLen.current === data.length)
      const shouldAutoscroll = curDataLen.current < data.length;
      const shouldScrollToTop = curDataLen.current >= data.length;

      onImageLoad(lastImage, () => {
        setShowLoader(false);
        onLoadRef.current && onLoadRef.current();

        // тут, чтобы знать актуальный, а не до момента полной загрузки
        const listTop = listRef.current?.getBoundingClientRect().top;

        // полагаем, высота всех изображений в галерее одинаковая
        if (listTop < 0) {
          if (shouldScrollToTop)
            return listRef.current.scrollIntoView({
              behavior: DEF_SCROLL_BEHAVIOR,
            });

          if (shouldAutoscroll)
            window.scrollBy({
              top:
                listItemHeight.current * (parseInt(scrollBy) || DEF_SCROLL_BY),
              behavior: DEF_SCROLL_BEHAVIOR,
            });
        }
      });
    }
    // запоминаем текущее
    curDataLen.current = data.length;
  }, [data, scrollBy, listRef]);

  return showLoader;
};
