import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import CharacterList from './components/CharacterList/CharacterList';
import getDataFromApi from './services/api';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searcherValue, setSearcherValue] = useState('');

  useEffect(() => {
    getDataFromApi().then(({ results }) => setCharacters(results));
  }, []);

  const handleSearchChange = (searchValue) => setSearcherValue(searchValue);

  const getFilteredCharacters = () =>
    characters.filter(({ name }) =>
      name.toLowerCase().includes(searcherValue.toLowerCase())
    );

  return (
    <>
      <Header />
      <Filters onSearchChange={handleSearchChange} />
      <CharacterList characters={getFilteredCharacters()} />
    </>
  );
};

export default App;
