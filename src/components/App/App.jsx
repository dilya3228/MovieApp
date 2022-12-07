import '../../style';
import MovieList from "../MovieList/MovieList";
import MainHeader from "../MainHeader/MainHeader";
import RatedPage from "../Page/RatedPage"
import { useState, useEffect } from 'react';

const App = () => {
  const [selectedPage, setSelectedPage] = useState("search");

  useEffect(() =>{
} , [selectedPage])

    return (
        <>
        <MainHeader setSelectedPage={setSelectedPage} />
          {selectedPage === 'search' &&  <MovieList />}
          {selectedPage === 'rated' &&  <RatedPage />}
        </>
    )
}
export default App;