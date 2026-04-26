import { isFunc } from '@common';
import { useEffect, useRef } from 'react';

export const useWillUnmount = callback => {
  const cb = useRef(isFunc(callback) ? callback : null);

  useEffect(() => {
    const { current } = cb;
    return () => current && current();
  }, []);
};
