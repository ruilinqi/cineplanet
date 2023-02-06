import './Modal.css'
const Modal = ({open,onClose,title,vote,poster,overview}) =>{
  if(!open) return null
  return(
    <div onClick={onClose} className="overlay">
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
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>Buy ticket!</span>
            </button>
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