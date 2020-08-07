import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({
  image,
  name,
  status,
  specie,
  origin,
  totalEpisodes,
}) => {
  console.log('hola');
  return (
    <>
      <div>
        <img src={image} alt={name}></img>
        <h1>{name}</h1>
        <p>Status: {status}</p>
        <p>Specie: {specie}</p>
        <p>Origin: {origin}</p>
        <p>Episodes: {totalEpisodes}</p>
      </div>
      <button>Back to characters</button>
    </>
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
