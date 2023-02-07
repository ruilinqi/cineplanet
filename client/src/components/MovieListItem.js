import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import MovieCard from "./MovieCard";
import './MovieList.css'
export default function MovieListItem(props) {
  const [movies, setMovies] = useState(null);
  const [trailer, setTrailer] = useState("")
  const [visible,setVisible] = useState(2)
  const showMoreMovies = () => {
    setVisible(prev => prev + 2)
  }
  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=5147ae78ba442bfacb0dba2cfe66bf6f`;
    // const trailerURL = "https://api.themoviedb.org/3/movie/76600/videos?api_key=5147ae78ba442bfacb0dba2cfe66bf6f";

    Promise.all([
      axios.get(movieURL)
    ])
      .then(all => {
        setMovies(all[0].data.results);
        // setTrailer(`https://www.youtube.com/embed/${all[1].data.results[0].key}`);
      })
  }, [])
  return (
   <>
    <div className="MovieList">
      {movies ? <>
        {movies.slice(0, visible).map((movie) =>
          <MovieCard key={movie.id} {...movie} />
        )}
      </> : null}
    </div>
    <div className="More">
    <button className="button is-info" onClick={showMoreMovies}>Show More</button>
    </div>
  </>   
  )
}