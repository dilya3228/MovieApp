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
  const [keyDownInput, setKeyDown] = useState(false);

  const allFetchMovies = async (text) => {
    const { data } = await movieRequest.get("/search/movie", {
      params: {
        query: text,
      },
    });
    setKeyDown(true);
    setAllFilms(data.results);
  };
  const fetchMovies = async () => {
    const { data } = await movieRequest.get("/movie/popular");
    setMovies(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
    //allFetchMovies();
  }, []);

 
  return (
    <>
      <Offline />
      <SearchInput allFetchMovies={allFetchMovies} />

      {isLoading ? (
        <Loading />
      ) : (
        <ul className="movies">
          {keyDownInput &&
          <>
            {allFilms.map((searchMovie, index) => {
              return <MovieCard key={index} {...searchMovie} />;
            })}
          </>
        }
          {!keyDownInput &&
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