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
          <h3>Welcome</h3>
          <h3>To <b style={{fontFamily:"fantasy"}}>CinePlanet</b></h3>
      </div>
  </div>
    )
}

export default Backgroud;