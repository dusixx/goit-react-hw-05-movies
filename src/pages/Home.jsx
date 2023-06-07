import { useEffect, useState } from 'react';
import { Trends } from 'components/Trends/Trends';
import { PageTitle } from 'styles/shared';
import { showError } from 'utils';
import TmdbService from 'services/tmdb/tmdbSrv';
import { OptionButtons } from 'components/OptionButtons/OptionButtons';

const btns = { week: 1, day: 0 };

const srv = new TmdbService();
const PAGE_TITLE = `TRENDS`;

export const Home = () => {
  const [active, setActive] = useState('week');
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    srv.getTop20(active).then(setTrends).catch(showError);
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
      <Trends data={trends} />
    </>
  );
};
