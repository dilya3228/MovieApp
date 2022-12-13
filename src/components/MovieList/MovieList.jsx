import { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Offline from '../Offline/Offline'
import SearchInput from '../SearchInput/SearchInput'
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound'
import Page from '../Page/Page'
import { guestToken } from '../../sevices/movie-rate'
import MovieRequest from '../../sevices/movie-request'

const MovieList = () => {
  const [allFilms, setAllFilms] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(true)
  const [datas, setDatas] = useState([])

  const getAllMovies = async (text = 'return') => {
    try {
      const { data } = await MovieRequest.get('/search/movie', {
        params: {
          query: text,
        },
      })
      if (data.results.length === 0) return setIsEmpty(false)
      else {
        setAllFilms(data.results)
        setDatas(data)
        setIsEmpty(true)
        setLoading(false)
      }
    } catch (e) {
      console.log(`Ошибка ${e}`)
    }
  }

  useEffect(() => {
    guestToken()
    getAllMovies()
  }, [])

  return (
    <>
      <Offline />
      <SearchInput getAllMovies={getAllMovies} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isEmpty && (
            <>
              <ul className="movies">
                <>
                  {allFilms.map((searchMovie, index) => {
                    return <MovieCard key={index} {...searchMovie} />
                  })}
                </>
              </ul>
              <Page datas={datas} getAllMovies={getAllMovies} />
            </>
          )}
          {!isEmpty && <FilmsNotFound />}
        </>
      )}
    </>
  )
}
export default MovieList
