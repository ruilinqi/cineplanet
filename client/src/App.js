import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import {useState, useEffect} from 'react'
import MovieListItem from './components/MovieListItem';

import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

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

      {/* <div>
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/register"} className="nav-link">
              Sign up
            </Link>
          </li>
        </div>
      </div> */}
      
      {/* <Router>
    <Routes>
    <Route path="/login" component={<Login/>} />
    </Routes>
    <Routes>
    <Route component={<MovieListItem/>} />
    </Routes>
  </Router> */}
        {/* <h2>{users.map(user => <li key = {user.id}>{user.email}</li>)}</h2> */}
        <Login/>
        <MovieListItem/>


      <br/>
      {/* <h2>{users.map(user => <li key = {user.id}>{user.email}</li>)}</h2> */}
      <SliderMovies/>
      <MovieListItem/>

    </div>
  );
}

export default App;
