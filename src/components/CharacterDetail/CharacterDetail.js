import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = ({
  image,
  name,
  status,
  specie,
  origin,
  totalEpisodes,
}) => {
  return (
    <section>
      <Link to="/">
        <button class="detail__button">Back to characters</button>
      </Link>
      <div className="detail">
        <img src={image} alt={name} className="detail__image"></img>
        <div className="detail__data">
          <h1 className="detail__name">{name}</h1>
          <p className="detail__status">
            Status: {status === 'Alive' ? '👽' : '💀'}
          </p>
          <p className="detail__specie">Specie: {specie}</p>
          <p className="detail__origin">Origin: {origin}</p>
          <p className="detail__episodes">Episodes: {totalEpisodes}</p>
        </div>
      </div>
    </section>
  );
};

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  totalEpisodes: PropTypes.number.isRequired,
};

export default CharacterDetail;
