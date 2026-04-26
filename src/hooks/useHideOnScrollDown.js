import throttle from 'lodash.throttle';
import { useEffect, useRef, useState } from 'react';

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

    document.addEventListener('scroll', throttle(handleDocumentScroll, delay));
  }, [delay]);

  return [visible, onTop];
};
