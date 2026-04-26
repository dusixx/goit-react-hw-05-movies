import { getList, normalizeStr } from '@common';
import { arrayOf, func, oneOfType, string } from 'prop-types';
import { useEffect, useState } from 'react';
import { OptionButton, OptionsList } from './OptionButtons.styled';

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
