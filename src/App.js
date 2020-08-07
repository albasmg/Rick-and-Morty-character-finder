import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
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

  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const character = characters.find(({ id }) => id === routeCharacterId);

    if (character) {
      return (
        <CharacterDetail
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.species}
          origin={character.origin.name}
          totalEpisodes={character.episode.length}
        />
      );
    } else {
      return <p>Este personaje no se ha encontrado</p>;
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters onSearchChange={handleSearchChange} />
          <CharacterList characters={getFilteredCharacters()} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
