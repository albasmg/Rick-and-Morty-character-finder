import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';
import './_characterList.scss';

const CharacterList = ({ characters }) => {
  return (
    <section>
      <ul className="characters">
        {characters.map(({ id, image, name, species }) => (
          <CharacterCard
            key={id}
            id={id}
            image={image}
            name={name}
            specie={species}
          />
        ))}
      </ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
