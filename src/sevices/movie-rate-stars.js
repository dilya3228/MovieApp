import MovieRequest from './movie-request'

const movieRateStars = async (starFull, id) => {
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
export default movieRateStars
