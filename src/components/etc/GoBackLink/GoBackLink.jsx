import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled } from './GoBackLink.styled';
import { IconArrowBack } from 'styles/icons';

const PREV_LOC = -1;
const DEF_ICON_SIZE = 25;

export const GoBackLink = ({ children, ...restProps }) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(pathname === '/' ? null : PREV_LOC);
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
