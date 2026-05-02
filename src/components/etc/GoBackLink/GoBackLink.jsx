import { IconArrowBack } from '@styles';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled } from './GoBackLink.styled';

const PREV_LOCATION = -1;
const DEF_ICON_SIZE = 25;

export const GoBackLink = ({ children, ...restProps }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(pathname === '/' ? null : PREV_LOCATION);
  }, [pathname]);

  return (
    path && (
      <LinkStyled to={path} title="Go Back" {...restProps}>
        <IconArrowBack size={DEF_ICON_SIZE} />
        {children}
      </LinkStyled>
    )
  );
};
