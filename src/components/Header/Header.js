import React from 'react';
import headerLogo from '../../assets/images/rickandmorty-logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="Rick and Morty logo"></img>
    </div>
  );
};

export default Header;
