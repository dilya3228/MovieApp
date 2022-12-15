import { Rate } from 'antd'
import movieRateStars from '../../sevices/postMovieRateStars'

const RatedList = ({ id }) => {
  const handleClickStar = (star) => {
    movieRateStars(star, id)
  }
  const localGetRating = localStorage.getItem('str')
  const ratedCards = JSON.parse(localGetRating)

  let res = []
  if (ratedCards) {
    res = ratedCards.filter((elem) => {
      return elem.id === id
    })
  }
  const aver = res.length > 0 ? res[0].rating : 0

  return <Rate key={id} defaultValue={aver} count={10} className="stars" onChange={handleClickStar} />
}
export default RatedList
