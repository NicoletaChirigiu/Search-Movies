import React, { useState, createContext, useEffect} from 'react';
import axios from 'axios';

import Spinner from '../../Components/Spinner/Spinner';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState('null');
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const searchMovie = async () => {
      setLoader(true);
      await axios
        .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
        .then((res) => {
          setMovies(res.data.Search);
          setLoader(false);
          notFoundMovie(res.data.Search);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
          notFoundMovie();
        });
    };
    searchMovie();
  }, [searchValue]);

  let notFoundMovie = (response) => {
    if (response === '' || response === undefined || response === null) {
      return;
    }
  };

  if (loader === true) {
    return <Spinner />;
  }

  return (
    <MovieContext.Provider
      value={{
        movies: [movies, setMovies],
        searchValueData: [searchValue, setSearchValue],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
