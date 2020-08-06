import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

const CharacterList = ({ characters }) => {
  return (
    <section>
      <ul>
        {characters.map(({ id, image, name, species }) => (
          <CharacterCard key={id} image={image} name={name} specie={species} />
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;
