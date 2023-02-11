import React from "react";
import Navbar from "./Navbar";
// import Login from "./Login";
// import Signup from "./Signup";
// import Logout from "./Logout";
import Backgroud from './Backgroud';
import SliderMovies from './SliderMovies';
import MovieListItem from "./MovieListItem";
import BackToTopButton from "./BackToTopButton";

const Home = () => {
  return (
    <div className="App">
      <Navbar/>
      <Backgroud/>
      <SliderMovies/>
      <MovieListItem/>
      <BackToTopButton/>
    </div>
  )
};
  
export default Home;