import { Bar, BarContainer } from './LoaderBar.styled';
import { createPortal } from 'react-dom';

const rootLoader = document.querySelector('#root-loader');
const DEF_HEIGHT = 2;

export const LoaderBar = ({ height = DEF_HEIGHT }) => {
  return createPortal(
    <>
      <BarContainer height={height}>
        <Bar />
      </BarContainer>
    </>,
    rootLoader
  );
};
