// import { useEffect, useState } from 'react';
// import movieRequest from '../../sevices/movie-request';
import '../../style';

import MovieList from '../MovieList/MovieList'

const App = () => {
  // const [movies, setMovies] = useState([]);
  // // const [genres, setGenres] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const {data} = await movieRequest.get('/movie/popular')
  //     setMovies(data.results)
  //     // const genres = await movieRequest.get('genre/movie/list')
  //     // setGenres(genres.name)
  //   }

  //   fetchMovies()
  // },[])

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     const {genres} = await movieRequest.get('/genre/movie/list')
  //     setGenre(genres.name)
  //     console(setGenre)
  //   }

  //   fetchMovies()
  // },[])

    return (
      <MovieList />
        // <div className="app">
        //   {movies.map((movie, index) => {
        //     return <MovieList key={index} {...movie} />
        //   })}
        // </div>
    )
}
export default App;