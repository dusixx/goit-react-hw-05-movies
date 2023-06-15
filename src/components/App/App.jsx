import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';
import { PageNotFound } from 'components/ErrorMessage/PageNotFound';
import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { lazyImport } from 'utils';

const Home = lazyImport('pages/Home');
const Movies = lazyImport('pages/Movies');
const Credits = lazyImport('pages/Credits');
const MovieDetails = lazyImport('pages/MovieDetails');

//
// App
//

export const App = ({ loader = <LoaderBar /> }) => {
  return (
    <div style={{ height: '100vh' }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home loader={loader} />}></Route>
          <Route path="movies" element={<Movies loader={loader} />}></Route>

          <Route
            path="movies/:movieId"
            element={<MovieDetails loader={loader} />}
          ></Route>

          <Route
            path="movies/:movieId/credits"
            element={<Credits loader={loader} />}
          ></Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={1500} progressStyle={{ height: '3px' }} />
    </div>
  );
};
