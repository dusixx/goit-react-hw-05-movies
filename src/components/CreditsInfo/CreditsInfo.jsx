import { useState, useEffect, useRef } from 'react';
import { OptionButtons } from '../etc/OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { normalizeCrewData } from 'services/tmdb/helpers';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { CreditsList, CreditsListItem, Container } from './CreditsInfo.styled';
import { sortObj } from 'utils';

const CARDS_PER_PAGE = 30;
const DEF_SORT_OPTIONS = { key: 'popularity', ascending: false };

//
// CreditsInfo
//

export const CreditsInfo = ({ data, sortOptions = DEF_SORT_OPTIONS }) => {
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
    sortedCredits.current = sortObj(data, sortOptions);
  }, [active, sortOptions]);

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
      <OptionButtons
        items={'cast crew'}
        onClick={handleClickOption}
        value={active}
      />

      {cards.length > 0 && (
        <CreditsList>
          {cards.map(({ id, ...rest }) => (
            <CreditsListItem key={id}>
              {/* !! при большом кол-ве тормозит - 
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
