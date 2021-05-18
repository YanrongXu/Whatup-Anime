import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Anime from './components/Anime';
import react, { useState, useEffect } from 'react';

const ANIME_API = 'https://api.jikan.moe/v3'

function App() {
  const [loading, setLoading] = useState(true)
  const [animes, setAnimes] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(`${ANIME_API}/search/anime?q=fruit`)
      .then(response => response.json())
      .then(animeData => {
        setAnimes(animeData.results)
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <Header text='Whatup Anime' />
      <div className="animes">
        {loading && !errorMessage ? (<span>Loading...</span>) :
        errorMessage ? (<div className="errorMessage">{errorMessage}</div>) :
        (animes.map((anime, index) => (
          <Anime key={`${index}-${anime.title}`} anime={anime} />
        )))}
      </div>
    </div>
  );
}

export default App;
