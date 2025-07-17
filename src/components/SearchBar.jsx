import React from 'react';
import GenderFilter from './filters/GenderFilter';
import StatusFilter from './filters/StatusFilter';
import SpeciesFilter from './filters/SpeciesFilter';


function SearchBar({ search, onSearchChange, filters, onFilterChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search a character..."
        value={search}
        onChange={onSearchChange}
      />
      <GenderFilter value={filters.gender} onChange={onFilterChange} />
      <StatusFilter value={filters.status} onChange={onFilterChange} />
      <SpeciesFilter value={filters.species} onChange={onFilterChange} />
    </div>
  );
}

export default SearchBar;
