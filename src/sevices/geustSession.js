import movieRequest from './movie-request'

let localgest = localStorage.getItem('guest')
const guestSession = movieRequest.get(`/guest_session/${localgest}/rated/movies`)
export default guestSession
