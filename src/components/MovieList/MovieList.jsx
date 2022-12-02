import { useEffect, useState } from 'react';
import movieRequest from '../../sevices/movie-request';
import MovieCard from '../MovieCard/MovieCard';
import Loading from "../Loading/Loading";
import Offline from '../Offline/Offline';
import SearchInput from "../SearchInput/SearchInput";


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [allFilms, setAllFilms] = useState([]);
  const [searchFilms, setSearchFilms] = useState(false);
  

  const allFetchMovies = async (text) => {
    try{
    const { data } = await movieRequest.get("/search/movie", {
      params: {
        query: text,
      },
    });
    setAllFilms(data.results);
    }catch(e){
      console.log(`Ошибка ${e}`)
    }
    setSearchFilms(true);
    
  };
  const fetchMovies = async () => {
    const { data } = await movieRequest.get("/movie/popular");
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

 
  return (
    <>
      <Offline />
      <SearchInput allFetchMovies={allFetchMovies} />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="movies">
          {searchFilms &&
          <>
            {allFilms.map((searchMovie, index) => {
              return <MovieCard key={index} {...searchMovie} />;
            })}
          </>
        }
          {!searchFilms &&
          <>
            {movies.map((movie, index) => {
              return <MovieCard key={index} {...movie} />;
            })}
          </>
      }
        </ul>
      )}
    </>
  );
};
export default MovieList;