import { useState, useEffect } from 'react';
import { OptionsList, OptionButton } from './OptionButtons.styled';
import { normalizeStr } from 'utils';

// NOTE: не передавать инлайн (<OptionButtons items = {...} />) -
// Каждый раз будет новый объект и перерендер

export const OptionButtons = ({ items, onClick }) => {
  const [active, setActive] = useState(null);
  const btns = items ?? '';

  // Если активных указано несколько - ставим последнюю
  useEffect(() => {
    Object.entries(btns).findLast(([name, isActive]) => {
      if (isActive) setActive(name);
      return isActive;
    });
  }, [btns]);

  const handleClick = name => {
    setActive(name);
    onClick && onClick(normalizeStr(name));
  };

  const btnNames = Object.keys(btns);
  // если не указана активная кнопка - ставим первую
  if (!active && btnNames.length) setActive(btnNames[0]);

  return (
    btnNames.length > 0 && (
      <OptionsList>
        {btnNames.map(name => (
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
