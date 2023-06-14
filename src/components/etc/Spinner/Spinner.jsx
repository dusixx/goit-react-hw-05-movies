import { RotatingLines } from 'react-loader-spinner';
import { number, oneOfType, string } from 'prop-types';

export const Spinner = ({ width = 40, ...restProps }) => (
  <RotatingLines
    strokeColor="black"
    strokeWidth="3"
    animationDuration="0.75"
    width={width}
    visible={true}
    {...restProps}
  />
);

Spinner.propType = {
  width: oneOfType([string, number]),
};
