import { useState } from 'react';
import { CreditsList, CreditsListItem } from './CreditsInfo.styled';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { normalizeCrewData } from 'services/tmdb/helpers';
import Loader from 'components/Loader';

const btns = { cast: 1, crew: 0 };

export const CreditsInfo = ({ data: { credits }, sortKey = 'popularity' }) => {
  const [active, setActive] = useState('cast');
  const [showLoader, setShowLoader] = useState(false);
  const { crew, cast } = credits;

  const personsData = active === 'cast' ? cast : normalizeCrewData(crew);
  const sorted = [...personsData].sort((a, b) => b[sortKey] - a[sortKey]);

  const content = sorted.map(({ id, ...rest }) => (
    <CreditsListItem key={id}>
      <PersonCard {...rest} />
    </CreditsListItem>
  ));

  return (
    <>
      <Loader visible={showLoader} />
      <OptionButtons items={btns} onClick={name => setActive(name)} />
      <CreditsList>{content}</CreditsList>
    </>
  );
};
