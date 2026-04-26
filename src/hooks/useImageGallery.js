import { onImageLoad } from '@common';
import { useEffect, useRef, useState } from 'react';

const DEF_SCROLL_BEHAVIOR = 'smooth';
const DEF_SCROLL_BY = 1.5;

export const useImageGallery = ({ listRef, onLoad, data, scrollBy }) => {
  const [showLoader, setShowLoader] = useState(false);
  const onLoadRef = useRef(onLoad);
  const listItemHeight = useRef(null);
  const curDataLen = useRef(null);

  // assume the gallery is loaded,if the last image (not lazy) is loaded
  useEffect(() => {
    listItemHeight.current =
      listItemHeight.current ??
      listRef.current?.firstElementChild?.getBoundingClientRect().height;

    const imgs = listRef.current?.querySelectorAll('img');

    if (imgs?.length) {
      setShowLoader(true);
      const lastImage = imgs[imgs.length - 1];

      // we calculate here, in the callback they will already be equal
      // (curDataLen.current === data.length)
      const shouldAutoscroll = curDataLen.current < data?.length;
      const shouldScrollToTop = curDataLen.current >= data?.length;

      onImageLoad(lastImage, () => {
        setShowLoader(false);
        onLoadRef.current && onLoadRef.current();

        // here, so we know the current one, not the one that was there before the gallery loaded
        const listTop = listRef.current?.getBoundingClientRect().top;

        // we assume that the height of all images in the gallery is the same
        if (listTop < 0) {
          if (shouldScrollToTop) {
            return listRef.current.scrollIntoView({
              behavior: DEF_SCROLL_BEHAVIOR,
            });
          }

          if (shouldAutoscroll) {
            const scrollByNum = parseInt(scrollBy);
            window.scrollBy({
              top:
                listItemHeight.current *
                (isNaN(scrollByNum) ? DEF_SCROLL_BY : scrollByNum),
              behavior: DEF_SCROLL_BEHAVIOR,
            });
          }
        }
      });
    }
    curDataLen.current = data?.length;
  }, [data, scrollBy, listRef]);

  return [showLoader];
};
