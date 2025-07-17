import React from 'react';

function GenderFilter({ value, onChange }) {
  return (
    <select name="gender" value={value} onChange={onChange}>
      <option value="">All Genders</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="genderless">Genderless</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}

export default GenderFilter;
