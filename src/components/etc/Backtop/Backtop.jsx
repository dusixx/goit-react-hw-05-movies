import { BacktopBtn } from './Backtop.styled';
import { IoIosArrowUp as IconArrowUp } from 'react-icons/io';
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_DELAY = 500;

export const Backtop = ({
  scrollBehavior = 'smooth',
  threshold = 700,
  ...restProps
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener(
      'scroll',
      throttle(() => setVisible(window.scrollY > threshold), THROTTLE_DELAY)
    );
  }, []);

  const handleBacktopClick = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  };

  return (
    <BacktopBtn visible={visible} onClick={handleBacktopClick} {...restProps}>
      <IconArrowUp size="60%" />
    </BacktopBtn>
  );
};
