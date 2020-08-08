import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ onSearchChange, searcherValue }) => {
  const handleInputChange = (ev) => onSearchChange(ev.target.value);

  const handleInputSubmit = (ev) => ev.preventDefault();

  return (
    <div>
      <form className="filter" onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={searcherValue}
          onChange={handleInputChange}
          className="filter__input"
        ></input>
      </form>
    </div>
  );
};

Filters.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Filters;
