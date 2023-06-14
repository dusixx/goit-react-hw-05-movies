import { RotatingLines } from 'react-loader-spinner';

export const Spinner = ({ spinnerWidth = 40, ...restProps }) => (
  <RotatingLines
    strokeColor="black"
    strokeWidth="3"
    animationDuration="0.75"
    width={spinnerWidth}
    visible={true}
    {...restProps}
  />
);
