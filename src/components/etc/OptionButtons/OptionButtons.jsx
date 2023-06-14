import { useState, useEffect } from 'react';
import { string, func, oneOfType, arrayOf } from 'prop-types';
import { OptionsList, OptionButton } from './OptionButtons.styled';
import { normalizeStr, getList } from 'utils';

export const OptionButtons = ({ items, value, onClick, ...restProps }) => {
  const [active, setActive] = useState(value);

  useEffect(() => {
    setActive(value);
  }, [value]);

  const handleClick = name => {
    setActive(name);
    onClick && onClick(normalizeStr(name));
  };

  const btns = getList(items);
  if (!active) setActive(btns[0]);

  return (
    btns.length > 0 && (
      <OptionsList {...restProps}>
        {btns.map(name => (
          <OptionButton
            key={name}
            active={active === name}
            onClick={() => handleClick(name)}
          >
            {name}
          </OptionButton>
        ))}
      </OptionsList>
    )
  );
};

OptionButtons.propType = {
  items: oneOfType([string, arrayOf(string)]),
  value: string,
  onClick: func,
};
