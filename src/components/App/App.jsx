import { ToastContainer } from 'react-toastify';
import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages';
import { MovieDetails } from 'pages/MovieDetails';
import { Credits } from 'pages/Credits';
import { ScrollToTop } from 'components/MovieInfo/Reviews/ScrollToTop/ScrollToTop';

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
            <Route path="movies/:movieId/credits" element={<Credits />}>
              {/* <Route path="cast" element={<div>Cast subpage</div>}></Route>
            <Route path="crew" element={<div>Crew subpage</div>}></Route> */}
            </Route>
            <Route path="*" element={<div>Page Not Found</div>} />
          </Route>
        </Routes>

        <ToastContainer autoClose={1500} progressStyle={{ height: '3px' }} />
      </Container>
    </>
  );
};
