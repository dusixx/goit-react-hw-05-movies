import { createPortal } from 'react-dom';
import { oneOfType, string, number } from 'prop-types';
import { Bar, BarContainer } from './LoaderBar.styled';

const DEF_HEIGHT = 2;
const rootLoader = document.querySelector('#root-loader');

export const LoaderBar = ({ height = DEF_HEIGHT }) => {
  return createPortal(
    <BarContainer height={height}>
      <Bar />
    </BarContainer>,
    rootLoader
  );
};

LoaderBar.propType = {
  height: oneOfType([string, number]),
};
