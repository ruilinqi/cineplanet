import React from 'react'
import space from '../assets/space.mp4'
import { useState,useEffect } from 'react'
import './Backgroud.css'

const Backgroud = () => {
  const [searchTerm,setSearchTerm]=useState('');

    return (
      <div className='intro'>
      <video src={space} autoPlay loop muted />
      <div className='introContent'>
          <h1>Welcome</h1>
          <h3>To CinePlanet.</h3>
      </div>
  </div>
    )
}

export default Backgroud;