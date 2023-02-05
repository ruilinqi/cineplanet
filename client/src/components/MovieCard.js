const MovieCard = ({title, vote_average, release_date, poster_path}) => {

  return <div>
    
      {title}
      {vote_average}
      {release_date}
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
    
  </div>
      
}
export default MovieCard;