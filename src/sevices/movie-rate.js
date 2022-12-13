import MovieRequest from './movie-request'

export const movieRateStars = async (starFull, id) => {
  const data = await MovieRequest.post(
    `/movie/${id}/rating`,
    {
      value: starFull,
    },
    {
      params: {
        guest_session_id: localStorage.getItem('guest'),
      },
    }
  ).catch((e) => console.log(e.name))
}

export const guestToken = async () => {
  if (localStorage.getItem('guest')) return
  const guestKey = await MovieRequest.get('/authentication/guest_session/new')
  localStorage.setItem('guest', `${guestKey.data.guest_session_id}`)
}

export const getAllMovies = async (setIsEmpty, setAllFilms, setDatas, setLoading, text = 'return') => {
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
