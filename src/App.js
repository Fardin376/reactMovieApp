import { useState, useEffect } from 'react'

import MovieCard from './MovieCard.jsx'

import './App.css'
import SearchIcon from './search.SVG'

const API_URL = 'http://www.omdbapi.com?apikey=c04494ec'

const movie1 = {
  Title: 'Superman, Spiderman or Batman',
  Year: '2011',
  imdbID: 'tt2084949',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg',
}

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  
  useEffect(() => {
    if (searchTerm === '') {
      const fetchAllMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
      }
      fetchAllMovies()
    } else {
      searchMovies(searchTerm)
    }
  }, [searchTerm])

  return (
    <div className="app">
      <h1>Movie Server</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
