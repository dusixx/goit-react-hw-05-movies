import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  // TODO: при возврате на /movies или movies?query=... не должно скролить в топ
  useEffect(() => {
    // setTimeout вроде как исправляет баг для некоторых случаев
    // когда прокрутка не срабатывает
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [pathname]);

  return children || null;
};
