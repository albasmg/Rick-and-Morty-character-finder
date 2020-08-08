import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';
import notFound from '../../assets/images/not-found.png';

const CharacterList = ({ characters, searcherValue }) => {
  return (
    <section>
      <ul className="characters">
        {!characters.length ? (
          <div className="characters__notFound">
            <h1 className="characters__notFoundHeading">
              No hay ningun personaje que coincida con la palabra
              <span className="characters__notFoundHeading--search">
                {searcherValue}
              </span>
            </h1>
            <img
              src={notFound}
              alt="Rick and Morty content not found"
              className="characters__notFoundImg"
            ></img>
          </div>
        ) : (
          characters.map(({ id, image, name, species }) => (
            <CharacterCard
              key={id}
              id={id}
              image={image}
              name={name}
              specie={species}
            />
          ))
        )}
      </ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
