import React, { useContext, useState } from 'react';

import { MovieContext } from '../MoviesContext/MoviesContext';

import './Search.css';

const Search = (props) => {
  const [name, setName] = useState('');

  const { searchValueData} = useContext(MovieContext);
  const [searchValue, setSearchValue] = searchValueData;

  const updateName = (e) => {
    setName(e.target.value);
  };




  const callSearchFunction = (e) => {
    e.preventDefault();
    setSearchValue(name);
  };

  return (
    <div className="Search">
      <form>
        <input
          name="name"
          value={name}
          type="text"
          className="SearchInput"
          onChange={updateName}
        />
        <input
          type="button"
          value="Search"
          className="SearchButton"
          onClick={callSearchFunction}
        />
      </form>
      <p>{props.detail}</p>
    </div>
  );
};

export default Search;
