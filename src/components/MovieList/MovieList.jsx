import { useEffect, useState } from 'react';
import movieRequest from '../../sevices/movie-request';
import MovieCard from '../MovieCard/MovieCard';
import Loading from "../Loading/Loading";
import Offline from '../Offline/Offline';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const {data} = await movieRequest.get('/movie/popular')
      setMovies(data.results)
      setLoading(false)
    }

    fetchMovies()
  },[])
    return(
      <>
      <Offline />
        {isLoading ? <Loading /> : 
        <ul className="movies">
            {movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />
          })}
        </ul>}
      </>
      
    );
}
export default MovieList;