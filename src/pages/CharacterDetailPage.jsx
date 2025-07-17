import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodeName, setEpisodeName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);

        // İlk göründüğü bölümün adını çek
        const firstEpisodeUrl = data.episode[0];
        const episodeRes = await fetch(firstEpisodeUrl);
        const episodeData = await episodeRes.json();
        setEpisodeName(episodeData.name);
      } catch (err) {
        setError('Character not found');
      }
    };

    fetchCharacter();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!character) return <p>Loading...</p>;

  return (
    <div className="app" >
      <Link to="/">← Back to list</Link>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Location: {character.location.name}</p>
      <p>First seen in: {episodeName}</p>
    </div>
  );
}

export default CharacterDetailPage;
