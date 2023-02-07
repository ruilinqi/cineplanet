import './App.css';
import axios from 'axios';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";

import {useState, useEffect} from 'react'
import MovieListItem from './components/MovieListItem';

import Login from "./components/Login";
import Signup from "./components/Signup";
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
      <h2>hello world</h2>

  
      <Login/>
      <br/>
      <Signup/>
      <SliderMovies/>
      <MovieListItem/>


      <br/>
      {/* <h2>{users.map(user => <li key = {user.id}>{user.email}</li>)}</h2> */}
      <MovieListItem/>

    </div>
  );
}

export default App;
