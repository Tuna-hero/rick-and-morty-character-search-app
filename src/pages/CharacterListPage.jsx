import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import SearchBar from '../components/SearchBar';
import CharacterCard from '../components/CharacterCard';
import { searchCharactersByName } from '../utils/api';
import { Link } from 'react-router-dom';

function CharacterListPage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: ''
  });
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search.length < 3) {
      setCharacters([]);
      return;
    }

    const fetchData = async () => {
      try {
        const results = await searchCharactersByName(search, filters);
        setCharacters(results);
        setError(null);
      } catch (err) {
        setCharacters([]);
        setError('No characters found');
      }
    };

    fetchData();
  }, [search, filters]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app">
      <h1>Rick and Morty Character Search</h1>
      <nav>
  <Link to="/">Karakterler</Link> | <Link to="/episodes">Bölümler</Link>
</nav>
      <SearchBar
        search={search}
        onSearchChange={handleSearchChange}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      {error && <p className="error">{error}</p>}
      <div className="card-grid">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default CharacterListPage;
