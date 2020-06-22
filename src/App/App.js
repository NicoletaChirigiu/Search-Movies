import React from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import MovieList from '../Components/MovieList/MovieList';

import { MovieProvider } from '../Components/MoviesContext/MoviesContext';

import './App.css';

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Header text="Search your movies" />
        <Search detail="Sharing a few of our favourite movies" />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default React.memo(App);
