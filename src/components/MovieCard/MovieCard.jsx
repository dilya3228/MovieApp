import Rating from "../Rating/Rating";

const getPosterURL = (posterpath) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterpath}`
}

const Card = ({poster_path, title, release_date, overview, original_title, vote_average}) => {
  return (
    <>
      <img src={getPosterURL(poster_path)} alt={title} className="movies__img" />
      <div className="movies__description">
        <h5 className="movies__name">{original_title || title}</h5>
        <div className="movies__rate">
          <Rating precent={vote_average} />
        </div>
        <p className="movies__date">{release_date}</p>
        <p className="movies__jenres">
            <span className="movies__jenre">Drama</span>
            <span className="movies__jenre">Action</span>
        </p>
        <p className="movies__intro">{overview}</p>
      </div>
    </>
  )
}
export default Card;