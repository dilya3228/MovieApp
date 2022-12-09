import { useEffect, useState } from 'react'
import Offline from '../Offline/Offline'
import Loading from '../Loading/Loading'
import MovieCard from '../MovieCard/MovieCard'
import movieRequest from '../../sevices/movie-request'

function RatedPage() {
  const [ratedList, setRatedList] = useState([])
  const [isLoading, setLoading] = useState(true)

  let localgest = localStorage.getItem('guest')
  const res = movieRequest.get(`/guest_session/${localgest}/rated/movies`)
  const result = () => {
    res.then((el) => {
      const str = JSON.stringify(el.data.results)
      localStorage.setItem('str', str)
      setRatedList(el.data.results)
      setLoading(false)
    })
  }

  useEffect(() => {
    result()
  }, [])

  return (
    <>
      <Offline />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="movies">
            <>
              {ratedList.map((searchMovie, index) => {
                return <MovieCard key={index} {...searchMovie} />
              })}
            </>
          </ul>
        </>
      )}
    </>
  )
}
export default RatedPage
