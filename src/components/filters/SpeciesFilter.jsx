import React from 'react';

function SpeciesFilter({ value, onChange }) {
  return (
    <select name="species" value={value} onChange={onChange}>
      <option value="">All Species</option>
      <option value="human">Human</option>
      <option value="alien">Alien</option>
      <option value="robot">Robot</option>
      <option value="animal">Animal</option>
    </select>
  );
}

export default SpeciesFilter;
