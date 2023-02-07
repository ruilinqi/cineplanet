import './App.css';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import {useState, useEffect} from 'react'
import MovieListItem from './components/MovieListItem';

import Login from "./components/Login";
import Signup from "./components/Signup";
// import Logout from "./components/Logout";
import Backgroud from './components/Backgroud';

// import Logout from "./components/Logout";

import SliderMovies from './components/SliderMovies';


function App() {
  // const [users,setUsers] = useState([]);

  // useEffect(()=>{
  //   axios.get('/users').then(res => {
  //     let result = res.data.users;
  //     setUsers(result)
  //   })
  // },[])

  return (
    <div className="App">
      <Login/>
      <br/>
      <Signup/>
      <Backgroud/>
      <SliderMovies/>
      <MovieListItem/>
    </div>
  );
}

export default App;
