import React from 'react';

import './Movie.css';

const DefaultPlaceholderImage =
  'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const movie = (props) => {
  const poster = props.Poster === "N/A" ? DefaultPlaceholderImage : props.Poster;

  return (
    <div className="Movie">
      <h2>{props.Title}</h2>
      <div>
        <img
          width="200px"
          alt={`The movie titled ${props.Title} `}
          src={poster}
        />
      </div>
      <p>({props.Year})</p>
    </div>
  );
};

export default movie;
