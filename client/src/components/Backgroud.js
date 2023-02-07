import React from 'react'
import space from '../assets/space.mp4'
import './Backgroud.css'
const Backgroud = () => {
    return (
      <div className='intro'>
      <video src={space} autoPlay loop muted />
      <div className='introContent'>
          <h1>Welcome</h1>
          <h3>To CinePlanet.</h3>
          <button>Search</button>
      </div>
  </div>
    )
}

export default Backgroud;