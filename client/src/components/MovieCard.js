const MovieCard = ({title, vote_average, release_date, poster_path}) => {

  return <div>
    <li>
      {title}
      {vote_average}
      {release_date}
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
    </li>
  </div>
      
}
export default MovieCard;