import { useRef, useEffect } from 'react';

// TODO: для мобильных можно уменьшать scrollBy
// window.matchMedia(...).addEventListener('change', cb)
// Или высчитывать от текущей высоты вьюпорта

export const useAutoScroll = ({ listRef, data, scrollBy }) => {
  const DEF_SCROLL_BY = 2;
  const DEF_SCROLL_BEHAVIOR = 'smooth';

  const listItemHeight = useRef(null);
  const curDataLen = useRef(null);

  useEffect(() => {
    const listTop = listRef.current?.getBoundingClientRect().top;

    listItemHeight.current =
      listItemHeight.current ??
      listRef.current?.firstElementChild?.getBoundingClientRect().height;

    if (listTop < 0) {
      if (curDataLen.current < data.length) {
        return window.scrollBy({
          top: listItemHeight.current * (parseInt(scrollBy) || DEF_SCROLL_BY),
          behavior: DEF_SCROLL_BEHAVIOR,
        });
      }

      if (curDataLen.current === data.length) {
        listRef.current.scrollIntoView({ behavior: DEF_SCROLL_BEHAVIOR });
      }
    }

    curDataLen.current = data?.length;
  }, [listRef, data, scrollBy]);
};
