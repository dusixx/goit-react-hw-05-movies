import { useState } from 'react';
import { OptionButtons } from '../OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { normalizeCrewData } from 'services/tmdb/helpers';
import { useEffect, useRef } from 'react';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

import { CreditsList, CreditsListItem, Container } from './CreditsInfo.styled';

const CARDS_PER_PAGE = 30;
const btns = { cast: 1, crew: 0 };

export const CreditsInfo = ({ data, sortKey = 'popularity' }) => {
  const [active, setActive] = useState('cast');
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);

  const credits = useRef({
    cast: data.credits.cast,
    crew: normalizeCrewData(data.credits.crew),
  });

  const sortedCredits = useRef(null);

  useEffect(() => {
    const data = credits.current[active];
    sortedCredits.current = data; //[...data].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [active, sortKey]);

  useEffect(() => {
    const start = (page - 1) * CARDS_PER_PAGE;
    const end = start + CARDS_PER_PAGE;
    setCards(cur => [...cur, ...sortedCredits.current.slice(start, end)]);
  }, [page, active]);

  const handleClickOption = name => {
    setCards([]);
    setActive(name);
    setPage(1);
  };

  const showLoadMore =
    cards.length > 0 &&
    sortedCredits.current &&
    cards.length < sortedCredits.current.length;

  return (
    <Container>
      <OptionButtons items={btns} onClick={handleClickOption} />

      {cards.length > 0 && (
        <CreditsList>
          {cards.map(({ id, ...rest }) => (
            <CreditsListItem key={id}>
              {/* NOTE: при большом кол-ве тормозит - 
                возможно из-за большого кол-ва styled component
                в разметке PersonCard
              */}
              <PersonCard {...rest} />
            </CreditsListItem>
          ))}
        </CreditsList>
      )}

      {showLoadMore && (
        <LoadMoreBtn
          onClick={() => setPage(cur => cur + 1)}
          style={{ marginTop: 10 }}
        >
          Load more
        </LoadMoreBtn>
      )}
    </Container>
  );
};
