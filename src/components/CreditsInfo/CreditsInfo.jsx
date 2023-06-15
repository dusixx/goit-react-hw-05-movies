import { useState, useEffect, useRef } from 'react';
import { OptionButtons } from '../etc/OptionButtons/OptionButtons';
import { PersonCard } from './PersonCard/PersonCard';
import { LoadMoreBtn } from 'components/etc/LoadMoreBtn/LoadMoreBtn';
import { SubHeader } from 'components/Subheader/Subheader';
import { normalizeCrewData, normalizeCastData } from 'services/tmdb/helpers';
import { useImageGallery, useLoadMorePagination } from 'hooks';
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

const noCredits = (active = 'credits') =>
  `The ${active} for this film has not been added`;

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
  const [credits, setCredits] = useState([]);
  const listRef = useRef(null);

  const [cards, setPage] = useLoadMorePagination({
    data: credits,
    itemsPerPage: CARDS_PER_PAGE,
  });

  const [showLoader] = useImageGallery({
    listRef,
    onLoad,
    scrollBy,
    data: cards,
  });

  const creditsNorm = useRef({
    /* id(798286) 2 роли у 1 человека */
    cast: normalizeCastData(data.credits.cast),
    crew: normalizeCrewData(data.credits.crew),
  });

  useEffect(() => {
    setPage(1);
    setCredits(sortObj(creditsNorm.current[active], sortOptions));
  }, [active, sortOptions, setPage]);

  const showLoadMore =
    !showLoader && cards.length > 0 && cards.length < credits.length;

  // no cast id(454172)
  const { cast, crew } = creditsNorm.current;
  if (!cast.length && !crew.length) {
    return <NoCredits> {noCredits()}</NoCredits>;
  }

  return (
    <Container>
      <>
        <SubHeader>
          <OptionButtons
            items={OPTION_ITEMS}
            onClick={setActive}
            value={active}
          />
        </SubHeader>

        {!credits.length && <NoCredits> {noCredits(active)}</NoCredits>}

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
