import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ onSearchChange }) => {
  const handleInputChange = (ev) => onSearchChange(ev.target.value);

  return (
    <div>
      <form className="filter">
        <input
          type="text"
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
