import { useState, useEffect, useRef } from 'react';
import { OptionButtons } from '../etc/OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { normalizeCrewData, normalizeCastData } from 'services/tmdb/helpers';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { CreditsList, CreditsListItem, Container } from './CreditsInfo.styled';
import { SubHeader } from 'components/SubHeader/SubHeader';
import { sortObj } from 'utils';
import { useAutoScroll } from './useAutoScroll';

const CARDS_PER_PAGE = 30;
const DEF_SORT_OPTIONS = { key: 'popularity', ascending: false };
const DEF_OPTION_VALUE = 'cast';
const OPTION_ITEMS = 'cast crew';

//
// CreditsInfo
//

export const CreditsInfo = ({
  data,
  sortOptions = DEF_SORT_OPTIONS,
  scrollBy,
}) => {
  const [active, setActive] = useState(DEF_OPTION_VALUE);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  useAutoScroll(listRef, cards, scrollBy);

  const credits = useRef({
    cast: normalizeCastData(data.credits.cast),
    crew: normalizeCrewData(data.credits.crew),
  });

  // console.log(data.credits.cast);

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
      <SubHeader>
        <OptionButtons
          items={OPTION_ITEMS}
          onClick={handleClickOption}
          value={active}
        />
      </SubHeader>

      {/* !! id(798286) 2 роли на 1 человека */}

      {cards.length > 0 && (
        <CreditsList ref={listRef}>
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
          style={{ marginTop: 15 }}
        >
          Load more
        </LoadMoreBtn>
      )}
    </Container>
  );
};
