import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({
  onSearchChange,
  onCheckboxChange,
  searcherValue,
  sortNameCheckbox,
}) => {
  const handleInputChange = (ev) => onSearchChange(ev.target.value);

  const handleInputSubmit = (ev) => ev.preventDefault();

  const handleCheckboxChange = (ev) => onCheckboxChange(ev.target.checked);

  return (
    <div>
      <form className="filter" onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={searcherValue}
          onChange={handleInputChange}
          className="filter__input"
        />
        <label className="filter__label">
          <input
            type="checkbox"
            checked={sortNameCheckbox}
            className="filter__checkbox"
            onChange={handleCheckboxChange}
          />
          Sort by name
        </label>
      </form>
    </div>
  );
};

Filters.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default Filters;
