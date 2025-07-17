import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/EpisodeListPage.css';

function EpisodeListPage() {
  const [groupedEpisodes, setGroupedEpisodes] = useState({});
  const [openSeasons, setOpenSeasons] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllEpisodes = async () => {
      const allEpisodes = [];
      let nextUrl = 'https://rickandmortyapi.com/api/episode';

      while (nextUrl) {
        const res = await fetch(nextUrl);
        const data = await res.json();
        allEpisodes.push(...data.results);
        nextUrl = data.info.next;
      }

      const groups = {};
      allEpisodes.forEach((ep) => {
        const seasonCode = ep.episode.slice(0, 3); // S01
        if (!groups[seasonCode]) groups[seasonCode] = [];
        groups[seasonCode].push(ep);
      });

      setGroupedEpisodes(groups);
    };

    fetchAllEpisodes();
  }, []);

  const toggleSeason = (season) => {
    setOpenSeasons((prev) => ({
      ...prev,
      [season]: !prev[season]
    }));
  };

  return (
    <div className="app">
      <Link to="/" className="back-btn">
        ← Back to Character Search
      </Link>

      <h1 className="title">Episodes by Season</h1>

      {Object.keys(groupedEpisodes).map((season) => (
        <div key={season} className="season-group">
          <button
            className="season-btn"
            onClick={() => toggleSeason(season)}
          >
            {season.replace('S', 'Season ')}
          </button>

          {openSeasons[season] && (
            <div className="episode-list">
              {groupedEpisodes[season].map((ep) => (
                <button
                  key={ep.id}
                  className="episode-btn"
                  onClick={() => navigate(`/episode/${ep.id}`)}
                >
                  {ep.episode} - {ep.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default EpisodeListPage;
