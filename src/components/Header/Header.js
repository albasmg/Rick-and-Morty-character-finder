import React from 'react';
import headerLogo from '../../assets/images/rickandmorty-logo.png';
import './_header.scss';

const Header = () => {
  return (
    <div className="header">
      <img
        src={headerLogo}
        alt="Rick and Morty logo"
        className="header__img"
      ></img>
    </div>
  );
};

export default Header;
