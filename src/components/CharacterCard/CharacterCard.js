import React from 'react';

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

export default CharacterCard;
