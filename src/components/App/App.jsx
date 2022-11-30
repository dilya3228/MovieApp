import { useEffect, useState } from 'react';
import movieRequest from '../../sevices/movie-request';
import '../../style';

import MovieCard from '../MovieCard/MovieCard'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await movieRequest.get('/movie/popular')
      setMovies(data.results)
      // const genres = await movieRequest.get('genre/movie/list')
      // setGenres(genres.name)
    }

    fetchMovies()
  },[])

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const {genres} = await movieRequest.get('/genre/movie/list')
  //     setGenre(genres.name)
  //     console(setGenre)
  //   }

  //   fetchMovies()
  // },[])

    return <div className="app">
        {movies.map((movie, index) => {
          return <MovieCard key={index} {...movie} />
        })}
      </div>
}

export default App;