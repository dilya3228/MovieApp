import movieRequest from './movie-request'

const guestToken = async () => {
  if (localStorage.getItem('guest')) return
  const guestKey = await movieRequest.get('/authentication/guest_session/new')
  localStorage.setItem('guest', `${guestKey.data.guest_session_id}`)
}
export default guestToken
