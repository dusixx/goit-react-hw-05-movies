import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages';
import { MovieDetails } from 'pages/MovieDetails';
import { Credits } from 'pages/Credits';
import { ScrollToTop } from 'components/MovieInfo/Reviews/ScrollToTop/ScrollToTop';
import { PageNotFound } from 'components/PageNotFound/PageNotFound';
//
// App
//

export const App = () => {
  return (
    <>
      <ScrollToTop />
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<div>Movies</div>}></Route>
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
