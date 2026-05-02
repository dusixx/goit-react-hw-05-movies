import { isVScrollBarVisible } from '@common';
import { useEffect } from 'react';

const { body } = document;
const root = document.documentElement;

export const BodyScrollLock = () => {
  useEffect(() => {
    const top = window.scrollY;
    const bodyCSSText = body.style.cssText;

    body.style.cssText = `
        ${bodyCSSText};
        position: fixed;
        top: -${top}px;
        width: 100%;
        overflow-y: ${isVScrollBarVisible() ? `scroll` : `hidden`};
      `;

    return () => {
      body.style.cssText = bodyCSSText;
      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top });
      root.style.removeProperty('scroll-behavior');
    };
  }, []);
};
