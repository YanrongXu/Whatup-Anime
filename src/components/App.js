import './App.css';
import Header from './Header';
import Anime from './Anime';
import Search from './Search'
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

  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)
    fetch(`${ANIME_API}/search/anime?q=${searchValue}`)
      .then(res => res.json())
      .then(animeData => {
        setAnimes(animeData.results)
        setLoading(false)
      })
  }

  return (
    <div className="App">
      <Header text='Whatup Anime' />
      <Search search={search} />
      <p className='App-intro'>What is u favorite Anime, Try Sword Art Online</p>
      <div className="animes">
        {loading && !errorMessage ? (<div>Loading...</div>) :
        errorMessage ? (<div className="errorMessage">{errorMessage}</div>) :
        (animes.map((anime, index) => (
          <Anime key={`${index}-${anime.title}`} anime={anime} />
        )))}
      </div>
    </div>
  );
}

export default App;
