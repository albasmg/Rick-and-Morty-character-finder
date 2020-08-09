import React from 'react';
import headerLogo from '../../assets/images/rickandmorty-logo.png';
import rick from '../../assets/images/rick.png';
import morty from '../../assets/images/morty.png';

const Header = () => {
  return (
    <div className="header">
      <img src={rick} alt="morty" className="header__icon"></img>
      <img
        src={headerLogo}
        alt="Rick and Morty logo"
        className="header__img"
      ></img>
      <img src={morty} alt="morty" className="header__icon"></img>
    </div>
  );
};

export default Header;
