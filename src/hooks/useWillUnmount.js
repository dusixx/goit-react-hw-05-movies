import { useEffect, useRef } from 'react';
import { isFunc } from 'utils';

export const useWillUnmount = callback => {
  const cb = useRef(isFunc(callback) ? callback : null);

  useEffect(() => {
    const { current } = cb;
    return () => current && current();
  }, []);
};
