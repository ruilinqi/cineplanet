import React from "react";
import Navbar from "./Navbar";
// import Login from "./Login";
// import Signup from "./Signup";
// import Logout from "./Logout";
import Backgroud from './Backgroud';
import SliderMovies from './SliderMovies';
import MovieListItem from "./MovieListItem";

const Home = () => {
  return (
    <div className="App">
      <Navbar/>
      <Backgroud/>
      <SliderMovies/>
      <MovieListItem/>
    </div>
  )
};
  
export default Home;