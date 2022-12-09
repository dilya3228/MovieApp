import '../../style'
import MovieList from '../MovieList/MovieList'
import MainHeader from '../MainHeader/MainHeader'
import RatedPage from '../RatedPage/RatedPage'
import { useState, useEffect } from 'react'
import Context from '../../Context/Context'
import movieRequest from '../../sevices/movie-request'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('search')
  const [ganreState, setGanreState] = useState([])

  const getGangeId = async () => {
    const { data } = await movieRequest.get('/genre/movie/list')
    setGanreState(data.genres)
  }

  useEffect(() => {
    getGangeId()
  }, [selectedPage])

  return (
    <>
      <Context.Provider value={ganreState}>
        <section className="app">
          <MainHeader setSelectedPage={setSelectedPage} />
          {selectedPage === 'search' && <MovieList />}
          {selectedPage === 'rated' && <RatedPage />}
        </section>
      </Context.Provider>
    </>
  )
}
export default App
