import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './_characterCard.scss';

const CharacterCard = ({ image, name, specie, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <li>
        <div className="character">
          <img src={image} alt={name} className="character__img"></img>
          <h2 className="character__name">{name}</h2>
          <p className="character__specie">{specie}</p>
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
