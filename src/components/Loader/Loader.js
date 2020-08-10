import React from 'react';
import pickleRick from '../../assets/images/pickle-rick.png';

const Loader = () => {
  return (
    <div className="loader">
      <p className="loader__text">Loading...</p>
      <img src={pickleRick} alt="Loader" className="loader__img"></img>
    </div>
  );
};

export default Loader;
