import movieRequest from './movie-request'

const getAllMovies = async (query, page) => {
  const { data } = await movieRequest.get('/search/movie', {
    params: {
      query,
      page,
    },
  })
  return data
}

export default getAllMovies
