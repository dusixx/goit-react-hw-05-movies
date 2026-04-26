import { PageNotFound } from '@components/ErrorMessage/PageNotFound';
import { LoaderBar } from '@components/etc/LoaderBar/LoaderBar';
import { SharedLayout } from '@components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';

const Home = lazy(() => import('@pages/Home.jsx'));
const Movies = lazy(() => import('@pages/Movies.jsx'));
const Credits = lazy(() => import('@pages/Credits.jsx'));
const MovieDetails = lazy(() => import('@pages/MovieDetails.jsx'));

export const App = ({ loader = <LoaderBar /> }) => (
  <>
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
  </>
);
