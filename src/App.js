import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterListPage from './pages/CharacterListPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import EpisodeListPage from './pages/EpisodeListPage';
import EpisodeDetailPage from './pages/EpisodeDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="/character/:id" element={<CharacterDetailPage />} />
        <Route path="/episodes" element={<EpisodeListPage />} />
        <Route path="/episode/:id" element={<EpisodeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
