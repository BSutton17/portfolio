import React, { useState } from 'react';
import { useAppContext } from './Context';
import '../App.css'; // Ensure that the CSS is linked

function Dropdown() {
  const { selectedValue, setSelectedValue } = useAppContext();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <select className="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="" selected hidden>Sort</option>
        <option value="1">Alphabetical</option>
        <option value="2">Newest</option>
        <option value="3">Oldest</option>
        <option value="4">Complexity</option>
      </select>
    </div>
  );
}

export default Dropdown;
