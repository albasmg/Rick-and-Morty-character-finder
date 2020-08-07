import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({ onSearchChange }) => {
  const handleInputChange = (ev) => onSearchChange(ev.target.value);

  return (
    <div>
      <form>
        <input type="text" onChange={handleInputChange}></input>
      </form>
    </div>
  );
};

Filters.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Filters;
