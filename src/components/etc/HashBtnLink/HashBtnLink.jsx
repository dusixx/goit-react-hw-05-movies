import { ButtonLink } from '@styles';
import { shape, string } from 'prop-types';
import { useEffect, useRef } from 'react';

const DefaultScrollOptions = {
  behavior: 'smooth',
  block: 'nearest',
  inline: 'nearest',
};

export const HashBtnLink = ({
  to,
  children,
  scrollOptions = DefaultScrollOptions,
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
