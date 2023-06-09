import { ButtonLink } from 'styles/shared';
import { useEffect, useRef } from 'react';

const DEF_SCROLL_OPTS = {
  behavior: 'smooth',
  block: 'nearest',
  inline: 'nearest',
};

/**
 *
 *  @param to - любой валидный селектор
 *  @param scrollOptions - параметры для scrollIntoView
 */
export const HashLink = ({ to, scrollOptions = DEF_SCROLL_OPTS, children }) => {
  const target = useRef(null);

  useEffect(() => {
    target.current = document.querySelector(String(to) || null);
  }, [to]);

  return (
    <ButtonLink onClick={() => target.current?.scrollIntoView(scrollOptions)}>
      {children}
    </ButtonLink>
  );
};
