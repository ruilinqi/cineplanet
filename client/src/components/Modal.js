import './Modal.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import StripeContainer from './StripeContainer'
import TicketModal from './TicketModal'

const Modal = ({open,onClose,title,vote,poster,overview}) =>{
  const [openModal, setOpenModal] = useState(false)
  const [films,setFilms] = useState(null)
  useEffect(()=>{
    axios.get(`http://localhost:8080/films/${title}`)
    .then( res => 
      setFilms(res.data[0])
    )
  },[])
  

  if(!open) {return null}

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
            <button className='btnPrimary' onClick={()=>setOpenModal(true)}>
              <span className='bold'>Buy ticket! (${films.price})</span>
            </button>
            {openModal ? 
            <TicketModal open = {openModal} onClose={() => setOpenModal(false)} title={title} price={films.price}/>: null
            }           
            {/* {openModal ? 
            <StripeContainer open = {openModal} onClose={() => setOpenModal(false)} price={films.price}/>: null
            } */}
            <button className='btnOutline'>
              <span className='bold' onClick={onClose}>Cancel</span>
            </button>           
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Modal