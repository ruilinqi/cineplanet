import React from "react";
import { useState,useEffect } from "react";
import axios, { all } from "axios";
export default function MovieListItem(props) {
  const [movies,setMovies] = useState(null);
  const [trailer,setTrailer]= useState("")
  useEffect(()=> {
  const movieURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=5147ae78ba442bfacb0dba2cfe66bf6f";
  // const trailerURL = "https://api.themoviedb.org/3/movie/76600/videos?api_key=5147ae78ba442bfacb0dba2cfe66bf6f";

  Promise.all([
    axios.get(movieURL)
  ])
  .then(all => {
    setMovies(all[0].data.results);
    // setTrailer(`https://www.youtube.com/embed/${all[1].data.results[0].key}`);
    })
  },[])
  // console.log(movies)
//   const trailerURL = [];
//  movies.map(movie => trailerURL.push(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=5147ae78ba442bfacb0dba2cfe66bf6f`))
//   console.log(trailerURL) 
  return (
    <div>
     {movies?<>
    {movies.map(movie => <li key = {movie.id}>
      Title:{movie.title}
      Vote Average:{movie.vote_average}
      Release Date:{movie.release_date}
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
      </li>)}
    </>:null}
    </div>
  )
}