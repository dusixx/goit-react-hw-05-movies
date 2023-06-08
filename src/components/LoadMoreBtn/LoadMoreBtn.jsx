import { useEffect, useRef, useState } from 'react';
import { Button, Spinner } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({
  loader: Loader,
  onClick,
  centered = true,
  ...restProps
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const btnRef = useRef(null);
  const btnRect = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    const { current: ref } = btnRef;
    observer.current = new IntersectionObserver(() => setShowLoader(false));
    observer.current.observe(ref);

    // фактический размер, чтобы спинер не менял габариты кнопки
    // Иначе надо задавать размеры кнопки в стилях
    btnRect.current = btnRef.current.getBoundingClientRect();

    return () => observer.current.unobserve(ref);
  }, []);

  const handleClick = e => {
    setShowLoader(true);
    onClick && onClick(e);
  };

  const { width, height } = btnRect.current || '';
  const rest = { width, height, ...restProps };

  return (
    <Button ref={btnRef} onClick={handleClick} centered={centered} {...rest}>
      {showLoader ? <Spinner size={height * 0.5} /> : 'Load more'}
    </Button>
  );
};
