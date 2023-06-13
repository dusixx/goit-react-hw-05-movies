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
  const clickCount = useRef(1);

  useEffect(() => {
    const { current: ref } = btnRef;
    observer.current = new IntersectionObserver(() => setShowLoader(false));
    observer.current.observe(ref);

    // фактический размер, чтобы спинер не менял габариты кнопки
    // Иначе надо жестко задать размеры кнопки в стилях
    btnRect.current = btnRef.current.getBoundingClientRect();

    return () => observer.current.unobserve(ref);
  }, []);

  const handleClick = e => {
    setShowLoader(true);
    clickCount.current += 1;
    onClick && onClick(clickCount.current, e);
  };

  const { width, height } = btnRect.current || '';
  const btnProps = { width, height, ...restProps };

  return (
    <Button
      ref={btnRef}
      onClick={handleClick}
      centered={centered}
      isLoading={showLoader}
      {...btnProps}
    >
      {showLoader ? <Spinner size={height * 0.5} /> : 'Load more'}
    </Button>
  );
};
