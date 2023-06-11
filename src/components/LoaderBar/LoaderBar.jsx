import { Bar, BarContainer } from './LoaderBar.styled';
import { createPortal } from 'react-dom';

const rootLoader = document.querySelector('#root-loader');

export const LoaderBar = () => {
  console.log('LoaderBar');
  return createPortal(
    <>
      <BarContainer>
        <Bar />
      </BarContainer>
    </>,
    rootLoader
  );
};
