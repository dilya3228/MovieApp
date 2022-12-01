import Rating from "../Rating/Rating";
import { format } from 'date-fns'

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`
}

const Card = ({poster_path, title, release_date, overview, original_title, vote_average, page}) => {


  const today = format(new Date(release_date), "MMMM d, yyyy");
  // const minText = overview.length < 19 ? overview.slice(0, overview.indexOf(' ', 110)) + '...' : overview.slice(0, overview.indexOf(' ', 200)) + '...';
  const hiddenText = overview.length > 200 ? overview.slice(0, overview.indexOf(' ', 100)) + '...' : overview
  const noDescription = overview.length === 0 ? 'No description' : hiddenText;

  const bar = {
    low: "solid 2px #FF0000",
    medium: "solid 2px #FFD700",
    high: "solid 2px #00FF00",
    none: "solid 2px #666666"
}

const getColor = (vote_average) => {

  if(vote_average >= 7) return "high";
  if(vote_average >= 4) return "medium";
  if(vote_average > 0) return "low";
  return 'none';
}

  return (
        <div className="movies__card">
          <img src={getPosterURL(poster_path)} alt={title} className="movies__img"/>
          <div className="movies__description">
            <h5 className="movies__name">{original_title}</h5>
            <div className="movies__rate" style={{border: bar[getColor(vote_average)]}}> 
              <Rating 
              precent={vote_average}
              />
            </div>
            <p className="movies__date">{today}</p>
            <p className="movies__jenres">
                <span className="movies__jenre">Drama</span>
                <span className="movies__jenre">Action</span>
            </p>
            <p className="movies__intro">{noDescription}</p>
          </div>
        </div>  
  )
}
export default Card;