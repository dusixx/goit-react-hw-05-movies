import { useState, useEffect } from 'react';
import { OptionsList, OptionButton } from './OptionButtons.styled';
import { normalizeStr, getList } from 'utils';

export const OptionButtons = ({ items, value, onClick, style }) => {
  const [active, setActive] = useState(value);

  useEffect(() => setActive(value), [value]);

  const handleClick = name => {
    setActive(name);
    onClick && onClick(normalizeStr(name));
  };

  const btns = getList(items);
  if (!active) setActive(btns[0]);

  return (
    btns.length > 0 && (
      <OptionsList style={style}>
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
