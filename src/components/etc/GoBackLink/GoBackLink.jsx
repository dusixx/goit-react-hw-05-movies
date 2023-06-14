import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled } from './GoBackLink.styled';
import { BiArrowBack as IconArrowBack } from 'react-icons/bi';

const PREV_LOC = -1;
const DEF_ICON_SIZE = 25;

export const GoBackLink = ({
  children,
  icon: Icon = IconArrowBack,
  ...restProps
}) => {
  const location = useLocation();
  const [path, setPath] = useState(null);

  useEffect(() => {
    const { pathname, state } = location;

    let wayback = PREV_LOC;
    //if (/movies(\/[^/]+)?$/.test(pathname)) wayback = '/';

    setPath(pathname === '/' ? null : state?.from ?? wayback);
  }, [location]);

  return (
    path && (
      <LinkStyled to={path} title="Go Back" {...restProps}>
        <Icon size={DEF_ICON_SIZE} />
        {children}
      </LinkStyled>
    )
  );
};
