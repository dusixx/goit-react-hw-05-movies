import { useRef, useEffect } from 'react';

const DEF_SCROLL_BY = 2;
const DEF_SCROLL_BEHAVIOR = 'smooth';

// TODO: для мобильных можно уменьшать scrollBy
// window.matchMedia(...).addEventListener('change', cb)
// Или высчитывать от текущей высоты вьюпорта

export const useAutoScroll = ({ listRef, data, scrollBy }) => {
  const listItemHeight = useRef(null);
  const curDataLen = useRef(null);

  useEffect(() => {
    const listTop = listRef.current?.getBoundingClientRect().top;

    listItemHeight.current =
      listItemHeight.current ??
      listRef.current?.firstElementChild?.getBoundingClientRect().height;

    if (listTop < 0) {
      if (curDataLen.current < data.length) {
        const scrollByNum = parseInt(scrollBy);
        return window.scrollBy({
          top:
            listItemHeight.current *
            (isNaN(scrollByNum) ? DEF_SCROLL_BY : scrollByNum),
          behavior: DEF_SCROLL_BEHAVIOR,
        });
      }

      if (curDataLen.current >= data.length) {
        listRef.current.scrollIntoView({ behavior: DEF_SCROLL_BEHAVIOR });
      }
    }

    curDataLen.current = data?.length;
  }, [listRef, data, scrollBy]);
};
