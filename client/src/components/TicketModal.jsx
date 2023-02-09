import { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import StripeContainer from './StripeContainer'

const TicketModal = ({open, onClose, title, price}) => {
  const [openModal, setOpenModal] = useState(false)
  const [films,setFilms] = useState(null)

  const [cinemas, setCinemas] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [datesTimes, setDatesTimes] = useState([]);

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
    console.log("handleChange", selectedOption)
  }
  console.log("selectedDate", selectedDate);
  console.log("selectedTime", selectedTime);
  if(!open) {return null}

  return (
    <div onClick={()=>{setOpenModal(false); onClose()}} className="overlay">
      <div onClick={(event)=>{event.stopPropagation()}} className="modalContainer">
        <div>
          <h1>Select your cinema and moive time!</h1>
          <span className='bold'>Your moive: {title}</span>

          <Select options={optionsCinema} onChange={handleChange}/>

          <label>Date:</label>
          <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
          <option value="">Select a date</option>
          {
            uniqueDates.map(date => (
              <option key={date} value={date}>
                {date.split("T")[0]}
              </option>
            ))
          }
          </select>

          <label>Time:</label>
          <select value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
            <option value="">Select a time</option>
            {
              datesTimes
                .filter(dt => dt.play_date === selectedDate)
                .map(dt => (
                  <option key={dt.play_time} value={dt.play_time}>
                    {dt.play_time}
                  </option>
                ))
            }
          </select>
          <p className='bold'>Your ticket's price: {price}</p>

          <div className='btnContainer'>
            <button className='btnPrimary' onClick={()=>setOpenModal(true)}>
              <span className='bold'>Checout!</span>
            </button>    
            {openModal ? 
            <StripeContainer open = {openModal} onClose={() => setOpenModal(false)} price={price}/>: null
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