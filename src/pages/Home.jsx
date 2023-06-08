import { useEffect, useState } from 'react';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { PageTitle, PageContainer } from 'styles/shared';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { OptionButtons } from 'components/OptionButtons/OptionButtons';

const btns = { week: 1, day: 0 };

const srv = new TmdbService();
const PAGE_TITLE = `Trends`;

export const Home = () => {
  const [active, setActive] = useState('week');
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    srv
      .getTop20(active)
      .then(({ results }) => setTrends(results))
      .catch(showError);
  }, [active]);

  return (
    <>
      <PageTitle style={{ marginBottom: 30, marginTop: 10 }}>
        {PAGE_TITLE}
      </PageTitle>
      <OptionButtons
        items={btns}
        onClick={name => setActive(name)}
        style={{ marginBottom: 30 }}
      />
      {trends && <MovieGallery data={trends} />}
    </>
  );
};
