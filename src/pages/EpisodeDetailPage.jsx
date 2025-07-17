import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

function EpisodeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      setEpisode(data);

      const characterData = await Promise.all(
        data.characters.map((url) => fetch(url).then((res) => res.json()))
      );
      setCharacters(characterData);
    };

    fetchEpisode();
  }, [id]);

  if (!episode) return <p>Loading...</p>;

  return (
    <div className="app">
  <Link to="/" className="back-btn">
        ← Back to Character Search
      </Link>

      <h1>{episode.name}</h1>
      <p><strong>Air Date:</strong> {episode.air_date}</p>
      <p><strong>Episode Code:</strong> {episode.episode}</p>

      <h2>Characters in this Episode</h2>
      <div className="card-grid">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default EpisodeDetailPage;
