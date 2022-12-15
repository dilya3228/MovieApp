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
  const [seacrhMuvie, setseacrhMuvie] = useState()
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const allFetchMoviesDebounce = useCallback(
    debounce(async (value = 'return', page) => {
      if (value.trim() === '') return
      setLoading(true)
      try {
        const data = await getAllMovies(value, page)
        if (data.results.length === 0) setIsEmpty(true)
        else {
          setAllFilms(data.results)
          setTotalPage(data.total_pages)
          setIsEmpty(false)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }, 1000),
    []
  )

  const searchFilms = (value, page) => {
    setseacrhMuvie(value)
    setPage(page)
    allFetchMoviesDebounce(value, page)
  }

  useEffect(() => {
    guestToken()
    searchFilms(seacrhMuvie)
  }, [])

  return (
    <>
      <Offline />
      <SearchInput
        value={seacrhMuvie}
        onChange={(e) => {
          searchFilms(e.target.value)
        }}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {!isEmpty && (
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
                  searchFilms(seacrhMuvie, newPage)
                }}
              />
            </>
          )}
          {isEmpty && <FilmsNotFound />}
        </>
      )}
    </>
  )
}
export default MovieList
