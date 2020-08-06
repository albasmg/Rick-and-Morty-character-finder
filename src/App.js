import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import CharacterList from './components/CharacterList/CharacterList';
import getDataFromApi from './services/api';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  return (
    <>
      <Header />
      <Filters />
      <CharacterList characters={characters} />
    </>
  );
};

export default App;
