import { LinkPrimary } from 'styles/shared';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdKeyboardArrowLeft as IconLeftArrow } from 'react-icons/md';

const PREV_LOC = -1;
const DEF_ICON_SIZE = 25;

const style = {
  display: 'inline-flex',
  alignItems: 'center',
};

export const GoBackLink = ({
  children,
  icon: Icon = IconLeftArrow,
  ...rest
}) => {
  const location = useLocation();
  const [path, setPath] = useState(PREV_LOC);

  useEffect(() => {
    const { key, pathname, state } = location;
    setPath(
      // key будет default даже в случае, если задали id в строке адреса и запрос был успешным
      // Поэтому на него нельзя ориентироваться
      pathname === '/' || (key === 'default' && state?.PAGE_NOT_FOUND)
        ? null
        : state?.from ?? PREV_LOC
    );
  }, [location]);

  return (
    path && (
      <LinkPrimary to={path} style={style} {...rest}>
        <Icon size={DEF_ICON_SIZE} />
        {children}
      </LinkPrimary>
    )
  );
};
