import './MovieCard.css'
import 'bulma/css/bulma.css'
import Modal from './Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion'
const MovieCard = ({ title, vote_average, release_date, poster_path, overview }) => {

  const [openModal, setOpenModal] = useState(false)
  return (
    <motion.div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
        </figure>
        <div className="content">
          Title: {title} <br />
          Vote Average: {vote_average} <br />
          Release Date: {release_date} <br />
          <button className="button" onClick={() => setOpenModal(true)}>More Details</button>
          <Modal open={openModal} onClose={() => setOpenModal(false)}
            title={title} vote={vote_average} poster={`https://image.tmdb.org/t/p/w500${poster_path}`} overview={overview} />
        </div>
      </div>
    </motion.div>
  )
}
export default MovieCard;