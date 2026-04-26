import { normalizeCastData, normalizeCrewData, sortObj } from '@common';
import { LoadMoreBtn } from '@components/etc/LoadMoreBtn/LoadMoreBtn';
import { OptionButtons } from '@components/etc/OptionButtons/OptionButtons';
import { SubHeader } from '@components/Subheader/Subheader';
import { useImageGallery, useLoadMorePagination } from '@hooks';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  CreditsList,
  CreditsListItem,
  NoCredits,
} from './CreditsInfo.styled';
import { PersonCard } from './PersonCard/PersonCard';

const CARDS_PER_PAGE = 30;
const DEF_SORT_OPTIONS = { key: 'popularity', ascending: false };
const DEF_OPTION_VALUE = 'cast';
const OPTION_ITEMS = 'cast crew';

const noCredits = (active = 'credits') =>
  `The ${active} for this film has not been added`;

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

  // TODO: it's better to scroll first and only then wait (spinner)
  // for all the images to actually load
  const [showLoader] = useImageGallery({
    listRef,
    onLoad,
    scrollBy,
    data: cards,
  });

  const creditsNorm = useRef({
    /* id(798286) one person has 2 roles */
    cast: normalizeCastData(data.credits.cast),
    crew: normalizeCrewData(data.credits.crew),
  });

  useEffect(() => {
    setPage(1);
    setCredits(sortObj(creditsNorm.current[active], sortOptions));
  }, [active, sortOptions, setPage]);

  const showLoadMore =
    !showLoader && cards.length > 0 && cards.length < credits.length;

  // id(454172) no cast
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
