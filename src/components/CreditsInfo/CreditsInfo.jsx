import { useState, useEffect, useRef } from 'react';
import { OptionButtons } from '../etc/OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { SubHeader } from 'components/SubHeader/SubHeader';
import { normalizeCrewData, normalizeCastData } from 'services/tmdb/helpers';
import { useImageGallery } from 'hooks/useImageGallery';
import { sortObj } from 'utils';

import {
  CreditsList,
  CreditsListItem,
  Container,
  NoCredits,
} from './CreditsInfo.styled';

const CARDS_PER_PAGE = 30;
const DEF_SORT_OPTIONS = { key: 'popularity', ascending: false };
const DEF_OPTION_VALUE = 'cast';
const OPTION_ITEMS = 'cast crew';
const NO_CREDITS = 'The cast for this film has not been added';

//
// CreditsInfo
//

export const CreditsInfo = ({
  data,
  scrollBy,
  onLoad,
  loader: Loader,
  sortOptions = DEF_SORT_OPTIONS,
}) => {
  const [active, setActive] = useState(DEF_OPTION_VALUE);
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const [showLoader] = useImageGallery({
    listRef,
    onLoad,
    scrollBy,
    data: cards,
  });

  const credits = useRef({
    /* !! id(798286) 2 роли на 1 человека */
    cast: normalizeCastData(data.credits.cast),
    crew: normalizeCrewData(data.credits.crew),
  });

  const sortedCredits = useRef([]);

  useEffect(() => {
    const arr = credits.current[active];
    sortedCredits.current = sortObj(arr, sortOptions);
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
    !showLoader &&
    cards.length > 0 &&
    cards.length < sortedCredits.current?.length;

  // No credits
  const { cast, crew } = credits.current;
  if (!cast.length && !crew.length) {
    return <NoCredits> {NO_CREDITS}</NoCredits>;
  }

  return (
    <Container>
      <>
        <SubHeader>
          <OptionButtons
            items={OPTION_ITEMS}
            onClick={handleClickOption}
            value={active}
          />
        </SubHeader>

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

        {showLoader && Loader}
      </>

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
