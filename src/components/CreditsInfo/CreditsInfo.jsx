import { useState } from 'react';
import { CreditsList, CreditsListItem } from './CreditsInfo.styled';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';

const btns = { cast: 1, crew: 0 };

export const CreditsInfo = ({ data: { credits } }) => {
  const [active, setActive] = useState(null);
  const { crew, cast } = credits;

  // TODO: crew предварительно надо собрать все джобы для каждого имени и
  //  потом рендерить одно фото и несколько джобов. Иначе дублируются в тч id
  console.log(active /* crew */);

  return (
    <>
      <OptionButtons items={btns} onClick={name => setActive(name)} />

      <CreditsList>
        {cast.map(personData => (
          <CreditsListItem key={personData.id}>
            <PersonCard {...personData} />
          </CreditsListItem>
        ))}
      </CreditsList>
    </>
  );
};
