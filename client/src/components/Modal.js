import './Modal.css'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import AuthContext from "../providers/AuthProvider";
import StripeContainer from './StripeContainer'
import TicketModal from './TicketModal'

const Modal = ({open,onClose,title,vote,poster,overview}) =>{
  const [openModal, setOpenModal] = useState(false)
  const [films,setFilms] = useState(null)
  const { auth } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false)

  useEffect(()=>{
    axios.get(`http://localhost:8080/films/${title}`)
    .then( res => 
      setFilms(res.data[0])
    )
  },[])
  

  if(!open) {return null}
  
  const handleClick = () => {
    if (auth.user_email) {
      setOpenModal(true)
    } else {
      setShowMessage(true)
      setTimeout(() => setShowMessage(false), 5000)
    }
  }

  return(
    <div onClick={()=>{setOpenModal(false); onClose()}} className="overlay">
      <div onClick={(event)=>{event.stopPropagation()}} className="modalContainer">
        <img className='ModalPoster' src={poster}/>
        <div className='modalRight'>
          <span className='closeBtn' onClick={onClose}>
            X
          </span>
          <div className='content'>
            <h1>Movie: {title}</h1>
            <h2>Vote Average: {vote}</h2>
            <p>Overview: {overview}</p>
            <iframe src={films.trailer} allowFullScreen/>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={handleClick}>
              <span className='bold'>Buy ticket! (${films.price})</span>
            </button>
            {openModal ?
              <TicketModal open={openModal} onClose={() => setOpenModal(false)} title={title} price={films.price} poster={poster}/> : null
            }
            <button className='btnOutline'>
              <span className='bold' onClick={onClose}>Cancel</span>
            </button>
          </div>
          {showMessage && <div className="message">Please login or signup to purchase a ticket.</div>}
            {/* {openModal ? 
            <StripeContainer open = {openModal} onClose={() => setOpenModal(false)} price={films.price}/>: null
            } */}
        </div>  
      </div>
    </div>
  )
}

export default Modal