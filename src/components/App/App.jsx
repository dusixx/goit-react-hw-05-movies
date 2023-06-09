import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home, Movies, Credits } from 'pages';
import { MovieDetails } from 'pages/MovieDetails';
import { ScrollToTop } from 'components/etc/ScrollToTop/ScrollToTop';
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
