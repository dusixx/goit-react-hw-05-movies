import { useRef, useEffect } from 'react';

export const useAutoScroll = (listRef, cards, scrollBy) => {
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
      if (curDataLen.current < cards.length) {
        return window.scrollBy({
          top: listItemHeight.current * (parseInt(scrollBy) || DEF_SCROLL_BY),
          behavior: DEF_SCROLL_BEHAVIOR,
        });
      }

      if (curDataLen.current === cards.length) {
        listRef.current.scrollIntoView({ behavior: DEF_SCROLL_BEHAVIOR });
      }
    }

    curDataLen.current = cards.length;
  }, [listRef, cards, scrollBy]);
};
