import { ButtonLink } from 'styles/shared';
import { useEffect, useRef } from 'react';
import { string, shape } from 'prop-types';

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
export const HashBtnLink = ({
  to,
  children,
  scrollOptions = DEF_SCROLL_OPTS,
  ...restProps
}) => {
  const target = useRef(null);

  useEffect(() => {
    target.current = document.querySelector(String(to) || null);
  }, [to]);

  return (
    <ButtonLink
      onClick={() => target.current?.scrollIntoView(scrollOptions)}
      {...restProps}
    >
      {children}
    </ButtonLink>
  );
};

HashBtnLink.propType = {
  to: string,
  scrollOptions: shape({
    behavior: string,
    block: string,
    inline: string,
  }),
};
