import { useEffect, useState, useRef } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 150;

export const useHideOnScrollDown = (
  initialVisible = true,
  { delay = THROTTLE_DELAY } = {}
) => {
  const [visible, setVisible] = useState(initialVisible);
  const [onTop, setOnTop] = useState(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleDocumentScroll = () => {
      setOnTop(window.scrollY === 0);
      setVisible(lastScrollY.current > window.scrollY);
      lastScrollY.current = window.scrollY;
    };

    document.addEventListener(
      'scroll',
      throttle(handleDocumentScroll, THROTTLE_DELAY)
    );
  }, []);

  return [visible, onTop];
};
