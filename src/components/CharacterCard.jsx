import React from 'react';
import '../styles/CharacterCard.css';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <div className="card-info">
        <h2>{character.name}</h2>
        <p className="status">
          <span className={`status-dot ${character.status.toLowerCase()}`} />
          {character.status} - {character.species}
        </p>
        <p className="label">Last known location:</p>
        <p>{character.location.name}</p>
        <p className="label">First seen in:</p>
        <p>{character.episode[0]}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
