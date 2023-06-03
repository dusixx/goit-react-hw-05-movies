import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Button } from './App.styled';
//import Searchbar from 'components/Searchbar';
//import MemoizedImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import { Routes, Route, NavLink } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'components/pages';
import { MovieDetails } from 'components/pages/MovieDetails';

// const { IDLE, REJECTED, RESOLVED, PENDING } = status;

//
// App
//

export const App = () => {
  return (
    <Container>
      {/* <Loader visible={status === PENDING} /> */}

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<div>Movies</div>}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        </Route>
      </Routes>

      <ToastContainer autoClose={1500} progressStyle={{ height: '3px' }} />
    </Container>
  );
};
