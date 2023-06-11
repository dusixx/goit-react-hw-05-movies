import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { PageNotFound } from 'components/PageNotFound/PageNotFound';
import { lazy } from 'react';

// pages

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Credits = lazy(() => import('pages/Credits'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));

//
// App
//

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}></Route>
            <Route path="movies/:movieId/credits" element={<Credits />}></Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

        <ToastContainer autoClose={1500} progressStyle={{ height: '3px' }} />
      </Container>
    </>
  );
};
