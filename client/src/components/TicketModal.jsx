import { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import StripeContainer from './StripeContainer'
import 'bulma/css/bulma.css'
import './Modal.css'
import './TicketModal.css'
import Backgroud from "./Backgroud";

const TicketModal = ({open, onClose, title, price, poster}) => {
  const [openModal, setOpenModal] = useState(false)
  const [films,setFilms] = useState(null)

  const [cinemas, setCinemas] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [datesTimes, setDatesTimes] = useState([]);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [selectedCinema, setSelectedCinema] = useState(null);


  //cinema
  useEffect(() => {
      axios
      .get("/cinema")
      .then(res => {
          console.log("All cinemas:", res.data);
          setCinemas(res.data)})
      .catch(err => console.log(err));
  }, []);

  //movie dates and times
  useEffect(()=>{
    axios.get(`http://localhost:8080/film_cinema/${title}`)
    .then( res => {
      console.log("Films Dates and Times", res.data);
      setDatesTimes(res.data)})
    .catch(err => console.log(err));
  },[])

  // cinema selector options
  const optionsCinema = cinemas.map(cinema => ({value: cinema.id, label: cinema.name}));


  // Remove duplicates from movie dates
  const uniqueDates = [...new Set(datesTimes.map(dt => dt.play_date))];

  const handleChange = (selectedOption) => {
    setSelectedCinema(selectedOption);

  }
  console.log("Selected Cinema:", selectedCinema)
  console.log("selectedDate", selectedDate);
  console.log("selectedTime", selectedTime);

  // Amount of tickets cannot be nagetive
  const handleTicketChange = (value) => {
    if (ticketAmount + value >= 0) {
    setTicketAmount(ticketAmount + value);
    }
    };

  if(!open) {return null}

  return (
    <div onClick={()=>{setOpenModal(false); onClose()}} className="overlay">
      <div onClick={(event)=>{event.stopPropagation()}} className="modalContainer">
        <div className="centerContainer">
          <h1>Select your cinema and moive time!</h1>
          <span className='closeBtn' onClick={onClose}>
            X
          </span>
          <h2 className='movieTitle'>Your moive: {title}</h2>
          <div className="columns is-centered">
          <div className="dropdown-column-one">
            <input type="submit" value ="Cinema" style={{height:"65px",
    border: "none", background : "#411b57"}}/>
            <Select options={optionsCinema} onChange={handleChange} placeholder={"Select a cinema location"}/>
          </div>
          </div>
          <div className="columns">
          <div className="dropdown-column-two">
            <input type="submit" value= "Date"style={{height:"65px",
    border: "none", background : "#411b57", color:"white"}}/>
            <Select
              options={uniqueDates.map(date => ({ value: date, label: date.split("T")[0] }))}
              value={{label: selectedDate.split("T")[0]}}
              onChange={selectedOption => {
                setSelectedDate(selectedOption.value);
                setSelectedTime("");}}
              placeholder={"Select a date"}
            />
          </div>
          <div className="dropdown-column-two">
            <input type="submit" value="Time"style={{height:"65px",
    border: "none", background : "#411b57", color:"white"}} />
            <Select
              options={datesTimes
                .filter(dt => dt.play_date === selectedDate)
                .map(dt => ({ value: dt.play_time, label: dt.play_time }))} v  
              value={{label: selectedTime}}
              onChange={selectedOption => setSelectedTime(selectedOption.value)}
              placeholder={"Select a time"} 
            />
          </div>
          </div>
          {/* amount of tickets */}
          <div className='ticketCount'>
            <button className='btn button is-link is-light is-round amount-btn' onClick={() => handleTicketChange(-1)}>-</button>
            <span className="countNumber">{ticketAmount}</span>
            <button className='btn button is-link is-light is-round amount-btn' onClick={() => handleTicketChange(+1)}>+</button>
          </div>
          <p className='bold subtotal-text'>Subtotal: ${price * ticketAmount}</p>

          <div className='btnContainer'>
            <button className='btnPrimary' onClick={()=>setOpenModal(true)}>
              <span className='bold'>Checkout</span>
            </button>    
            {openModal ? 
            <StripeContainer open = {openModal} onClose={() => setOpenModal(false)} title={title} price={price * ticketAmount} selectedCinema={selectedCinema.label} selectedDate={selectedDate.split("T")[0] } selectedTime={selectedTime} ticketAmount={ticketAmount} poster={poster}/>: null
            }
            <button className='btnOutline'>
            <span className='bold' onClick={onClose}>Cancel</span>
            </button>           
          </div>
        </div>
      </div>
    </div>
  );
    
};
    
export default TicketModal;