import React, { useState } from 'react';

const Filters = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');

  const handleInputChange = (ev) => {
    setSearch(ev.target.value);
    onSearchChange(ev.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={search} onChange={handleInputChange}></input>
      </form>
    </div>
  );
};

export default Filters;
