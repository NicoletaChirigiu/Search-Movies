import React, { useContext, useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import Spinner from '../Spinner/Spinner';
import Auxiliary from '../../Container/HOC/Auxiliary/Auxiliary';

import axios from 'axios';

import { MovieContext } from '../MoviesContext/MoviesContext';

const MovieList = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const { movies } = useContext(MovieContext);
  const [moviesValue] = movies;

  useEffect(() => {
    let fetchData = async () => {
      await axios
        .get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
        .then((res) => {
          setData(res.data.Search);
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if (
      moviesValue === null ||
      moviesValue === '' ||
      moviesValue === undefined
    ) {
      fetchData();
    } else {
      setData(moviesValue);
      setLoader(false);
    }
  }, []);

  if (data === null || loader === true) {
    return <Spinner />;
  }

  return (
    <Auxiliary>
      {data.map((el) => (
        <Movie
          key={el.imdbID}
          Title={el.Title}
          Poster={el.Poster}
          Year={el.Year}
        />
      ))}
    </Auxiliary>
  );
};

export default MovieList;
