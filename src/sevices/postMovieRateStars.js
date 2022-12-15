import movieRequest from './movie-request'

const postMovieRateStars = async (starFull, id) => {
  const data = await movieRequest
    .post(
      `/movie/${id}/rating`,
      {
        value: starFull,
      },
      {
        params: {
          guest_session_id: localStorage.getItem('guest'),
        },
      }
    )
    .catch((e) => console.log(e.name))
}
export default postMovieRateStars
