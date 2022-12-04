import { useEffect, useState } from 'react';
import Rating from "../Rating/Rating";
import { format } from 'date-fns'
import Loading from "../Loading/Loading"

const Card = ({poster_path, title, release_date, overview, original_title, vote_average}) => {
  const getPosterURL = () => {
    if(poster_path === null) return "https://cdn.fishki.net/upload/post/2022/11/30/4311893/3-5.jpg"
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
  }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const formatData = (data) => {
    if(!data) return null
  return format(new Date(data), "MMMM d, yyyy");
  }
  // const today = format(new Date(release_date), "MMMM d, yyyy");
  // const minText = overview.length < 19 ? overview.slice(0, overview.indexOf(' ', 110)) + '...' : overview.slice(0, overview.indexOf(' ', 200)) + '...';
  const hiddenText = overview.length > 200 ? overview.slice(0, overview.indexOf(' ', 100)) + '...' : overview
  const noDescription = overview.length === 0 ? 'No description' : hiddenText;

  const bar = {
    none: "solid 2px #E90000",
    low: "solid 2px #E97E00",
    medium: "solid 2px #E9D100",
    high: "solid 2px #66E900"
  }

  const getColor = (vote_average) => {

    if(vote_average > 7) return "high";
    if(vote_average > 5 & vote_average < 7) return "medium";
    if(vote_average > 3 & vote_average < 5) return "low";
    if(vote_average > 0 & vote_average < 3) return "none";
  }

  return (
      <div>
        <div className="movies__card">
          {loading ? <Loading /> :
          <img 
          src={getPosterURL(poster_path)} style={{height: "281px"}} alt={title} className="movies__img" />}
          <div className="movies__description">
            <h5 className="movies__name">{original_title}</h5>
            <div className="movies__rate" style={{border: bar[getColor(vote_average)]}}> 
              <Rating 
              precent={vote_average}
              />
            </div>
            <p className="movies__date">{formatData(release_date)}</p>
            <p className="movies__jenres">
                <span className="movies__jenre">Drama</span>
                <span className="movies__jenre">Action</span>
            </p>
            <p className="movies__intro">{noDescription}</p>
          </div>
        </div>
      </div>
  )
}
export default Card;