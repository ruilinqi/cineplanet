import './MovieCard.css'
import 'bulma/css/bulma.css'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import ReactCardFlip from 'react-card-flip';
const MovieCard = ({ title, vote_average, release_date, poster_path, overview }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  };
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='front'>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} onClick={handleClick} style={{ marginBottom: "50px" }} />
        </div>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} onClick={handleClick} />
            </figure>
            <div className="content" style={{marginTop:"0px"}}>
              Title: {title} <br />
              Vote Average: {vote_average} <br />
              Release Date: {release_date} <br />
              <button className="button-more-details" onClick={() => setOpenModal(true)} style={{fontSize:"20px", padding:"5px 0"}} >More Details</button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      <div className='ticket-page'>
        <Modal open={openModal} onClose={() => setOpenModal(false)}
          title={title} vote={vote_average} poster={`https://image.tmdb.org/t/p/w500${poster_path}`} overview={overview} />
      </div>
    </div>
  )
}
export default MovieCard;