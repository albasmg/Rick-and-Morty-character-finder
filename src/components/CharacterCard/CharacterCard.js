import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const CharacterCard = ({ image, name, specie, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <li>
        <div>
          <img src={image} alt={name}></img>
          <h2>{name}</h2>
          <p>{specie}</p>
        </div>
      </li>
    </Link>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
};

export default CharacterCard;
