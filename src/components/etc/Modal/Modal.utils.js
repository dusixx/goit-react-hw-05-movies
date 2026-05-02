export const TRANSITION_DURATION = 250;

const backdropDefaultStyle = {
  transitionProperty: `opacity`,
  transitionDuration: 'var(--trans-duration)',
  transitionTimingFunction: 'var(--trans-func)',
  opacity: 0,
};

const backdropTransitionStyle = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

export const getBackdropStyle = transitionState => {
  return {
    ...backdropDefaultStyle,
    ...backdropTransitionStyle[transitionState],
  };
};
