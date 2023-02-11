import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import MovieCard from "./MovieCard";
import './MovieList.css'
import Filter from "./Filter";
import {motion} from 'framer-motion'

export default function MovieListItem(props) {
  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered,setFiltered] = useState([]);
  const [activeGenre,setActiveGenre] = useState(0);

  const showMoreMovies = () => {
    setTimeout(()=>{
      setVisible(prev => prev + 3)
    },1000)
  }
  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=5147ae78ba442bfacb0dba2cfe66bf6f`;
    Promise.all([
      axios.get(movieURL)
    ])
      .then(all => {
        setMovies(all[0].data.results);
        setFiltered(all[0].data.results);
      })
  }, [])

  return (
    <>
      <Filter movies = {movies} setFiltered = {setFiltered} activeGenre = {activeGenre} setActiveGenre = {setActiveGenre}/>
      <div className="searchPart">
          <input type={'submit'} value={'Search'}/>
        <form>
          <input className="inputField" type="text" placeholder="Any movie you want to watch?" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </form>
      </div>
      <div className="MovieList">
        {filtered ? <>
          {filtered
            .filter((movie) => {
              if (searchTerm == "") {
                return movie;
              } else if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return movie;
              }
            })
            .slice(0, visible)
            .map((movie) =>
              <MovieCard key={movie.id} {...movie} />
            )}
        </> : null}
      </div>
      <div className="More">
        <button className="loading-button" onClick={showMoreMovies}>Show More</button>
      </div>
    </>
  )
}