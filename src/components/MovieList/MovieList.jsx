import { useEffect, useState } from 'react'
import movieRequest from '../../sevices/movie-request'
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Offline from '../Offline/Offline'
import SearchInput from '../SearchInput/SearchInput'
import Cat from '../Cat/Cat'
import Page from '../Page/Page'

const MovieList = () => {
  const [allFilms, setAllFilms] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isEmpty, setIsEmpty] = useState(true)
  const [datas, setDatas] = useState([])

  const guestToken = async () => {
    if (localStorage.getItem('guest')) return
    const guestKey = await movieRequest.get('/authentication/guest_session/new')
    localStorage.setItem('guest', `${guestKey.data.guest_session_id}`)
  }

  const allFetchMovies = async (text = 'return') => {
    try {
      const { data } = await movieRequest.get('/search/movie', {
        params: {
          query: text,
        },
      })
      let a = JSON.stringify(data.results)
      localStorage.setItem('zzz', a)

      if (data.results.length === 0) return setIsEmpty(false)
      else {
        setIsEmpty(true)
        setLoading(false)
        setAllFilms(data.results)
        setDatas(data)
      }
    } catch (e) {
      console.log(`Ошибка ${e}`)
    }
  }

  useEffect(() => {
    guestToken()
    allFetchMovies()
  }, [])

  return (
    <>
      <Offline />
      <SearchInput allFetchMovies={allFetchMovies} />
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
              <Page datas={datas} allFetchMovies={allFetchMovies} />
            </>
          )}
          {!isEmpty && <Cat />}
        </>
      )}
    </>
  )
}
export default MovieList
