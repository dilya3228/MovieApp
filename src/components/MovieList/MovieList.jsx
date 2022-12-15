import { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Offline from '../Offline/Offline'
import SearchInput from '../SearchInput/SearchInput'
import FilmsNotFound from '../FilmsNotFound/FilmsNotFound'
import Pagination from '../Pagination/Pagination'
import guestToken from '../../sevices/guestToken'
import getAllMovies from '../../sevices/getAllMovies'

const MovieList = () => {
  const [allFilms, setAllFilms] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(true)
  const [seacrhValue, setSeacrhValue] = useState('return')
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const allFetchMoviesDebounce = useCallback(
    debounce(async (value, page) => {
      setLoading(true)
      try {
        const data = await getAllMovies(value, page)
        setAllFilms(data.results)
        setTotalPage(data.total_pages)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }, 1000),
    []
  )

  const search = (value, page) => {
    setSeacrhValue(value)
    setPage(page)
    allFetchMoviesDebounce(value, page)
  }

  useEffect(() => {
    guestToken()
    search(seacrhValue)
  }, [])

  return (
    <>
      <Offline />
      <SearchInput
        value={seacrhValue}
        onChange={(e) => {
          search(e.target.value)
        }}
      />
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
              <Pagination
                total_pages={totalPage}
                current={page}
                onChange={(newPage) => {
                  search(seacrhValue, newPage)
                }}
              />
            </>
          )}
          {!isEmpty && <FilmsNotFound />}
        </>
      )}
    </>
  )
}
export default MovieList
