import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import goBack from '../../assets/images/back.png';

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
      <div className="detail">
        <img src={image} alt={name} className="detail__image"></img>
        <div className="detail__characterInfo">
          <h1 className="detail__name">{name}</h1>
          <div>
            <p className="detail__info">
              Status: {status === 'Alive' ? '👽' : '💀'}
            </p>
            <p className="detail__info">
              Specie: <span>{specie}</span>
            </p>
            <p className="detail__info">
              Origin: <span>{origin}</span>
            </p>
            <p className="detail__info">
              Episodes: <span>{totalEpisodes}</span>
            </p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="detail__button">
          <img
            src={goBack}
            alt="Go back to all characters"
            className="detail__backIcon"
          />
          Back to all characters
        </button>
      </Link>
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
