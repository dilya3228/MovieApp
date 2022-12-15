import Context from '../../Context/Context'

const GetRightGenres = ({ genre_ids }) => {
  return (
    <p className="movies__jenres">
      <Context.Consumer>
        {(value) => {
          if (value) {
            let genArr = genre_ids.map((item) => {
              let getItem = value.find((el) => el.id === item)
              return getItem?.name
            })
            let genresPrepared = genArr.slice(0, 3).map((name, id) => {
              return (
                <span key={id} className="movies__jenre">
                  {name}
                </span>
              )
            })
            return genresPrepared
          }
        }}
      </Context.Consumer>
    </p>
  )
}

export default GetRightGenres
