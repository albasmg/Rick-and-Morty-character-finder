import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import getDataFromApi from './services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searcherValue, setSearcherValue] = useState('');
  const [sortNameCheckbox, setSortNameCheckbox] = useState(false);

  useEffect(() => {
    getDataFromApi().then(({ results }) => setCharacters(results));
  }, []);

  const handleSearchChange = (searchValue) => setSearcherValue(searchValue);

  const handleNameSortCheckbox = (sortNameCheckbox) =>
    setSortNameCheckbox(sortNameCheckbox);

  const getFilteredCharacters = () => {
    const filteredCharacters = characters.filter(({ name }) =>
      name.toLowerCase().includes(searcherValue.toLowerCase())
    );

    if (sortNameCheckbox) {
      return filteredCharacters.sort((prevCharacter, nextCharacter) => {
        const prevCharacterName = prevCharacter.name.toLowerCase();
        const nextCharacterName = nextCharacter.name.toLowerCase();
        return prevCharacterName < nextCharacterName
          ? -1
          : prevCharacterName > nextCharacterName
          ? 1
          : 0;
      });
    }

    return filteredCharacters;
  };

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
      return (
        <p className="urlNotFoundText">
          Este personaje no se ha encontrado, puedes volver a{' '}
          <Link to="/">
            <span>el listado incial</span>
          </Link>{' '}
          para ver el resto.
        </p>
      );
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Filters
            onSearchChange={handleSearchChange}
            onCheckboxChange={handleNameSortCheckbox}
            searcherValue={searcherValue}
            sortNameCheckbox={sortNameCheckbox}
          />
          <CharacterList
            characters={getFilteredCharacters()}
            searcherValue={searcherValue}
          />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </>
  );
};

export default App;
