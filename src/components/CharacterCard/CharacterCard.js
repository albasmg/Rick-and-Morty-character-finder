import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ image, name, specie }) => {
  return (
    <>
      <li>
        <div>
          <img src={image} alt={name}></img>
          <h2>{name}</h2>
          <p>{specie}</p>
        </div>
      </li>
    </>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};

export default CharacterCard;
