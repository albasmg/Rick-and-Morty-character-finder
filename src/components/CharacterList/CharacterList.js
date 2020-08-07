import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = ({ characters }) => {
  return (
    <section>
      <ul>
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
