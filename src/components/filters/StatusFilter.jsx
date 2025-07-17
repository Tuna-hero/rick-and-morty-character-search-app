import React from 'react';

function StatusFilter({ value, onChange }) {
  return (
    <select name="status" value={value} onChange={onChange}>
      <option value="">All Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}

export default StatusFilter;
