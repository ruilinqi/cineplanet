import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

import {useState, useEffect} from 'react'
import Home from './components/Home';
import MovieListItem from './components/MovieListItem';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

// import Logout from "./components/Logout";
import Backgroud from './components/Backgroud';
// import Logout from "./components/Logout";
import SliderMovies from './components/SliderMovies';
import { AuthProvider } from './providers/AuthProvider';
import OrderProvider from './providers/ContextProvider';

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              {/* nested route inside*/}
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout/>} />

          </Routes>
        </BrowserRouter>  

      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
