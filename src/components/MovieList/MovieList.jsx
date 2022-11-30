import { useEffect, useState } from 'react';
import movieRequest from '../../sevices/movie-request';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await movieRequest.get('/movie/popular')
      setMovies(data.results)
    }

    fetchMovies()
  },[])
    return(
        <ul className="movies">
            {movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />
          })}
        </ul>
    );
}
export default MovieList;