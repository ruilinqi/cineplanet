import React, { useState,useContext } from "react";
// import OrderContext, { OrderProvider } from "../providers/ContextProvider"
import AuthContext from "../providers/AuthProvider";
import { OrderContext } from "../providers/ContextProvider"
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./UserAvatar.css"

const UserAvatar = ({ open,onClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const { auth } = useContext(AuthContext);

  // const { order } = useContext(OrderContext);
  const { allOrders } = useContext(OrderContext);

  if(!open) {return null}

  return (
    <div onClick={()=>{setOpenModal(false); onClose()}} className="overlay">
      <div onClick={(event)=>{event.stopPropagation()}} className="avatarModalContainer">
        <div className="ticketsContainer">
          <div className="popup">
            {/* <p>You movie ticket: {order.title} {order.selectedDate} {order.selectedTime} {order.ticketAmount}</p> */}
            {/* <h3>Your Tickets: </h3> */}
            <h1 class="upcomming">Your Tickets</h1>
            {allOrders.map((order, index) => (
            <div key={index}>
            {/* <p>Order {index + 1}: {order.title} {order.selectedCinema} {order.selectedDate} {order.selectedTime} {order.ticketAmount}</p> */}
            
            <div class="container">
              <div class="item columns is-centered">
                <div class="item-right">
                  {/* <h2 class="num">23</h2>
                  <p class="day">Feb</p> */}
                  <img src = {order.poster}/>
                  <span class="up-border"></span>
                  <span class="down-border"></span>
                </div>
                
                <div class="item-left">
                  <p class="event">Movie</p>
                  <h2 class="title">{order.title}</h2>
                  
                  <div class="sce">
                    <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={solid('calendar-days')} />
                    </span>
                    <p>{order.selectedDate}</p>
                    <br/> 
                    <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={solid('clock')} />
                    </span>
                    <p>{order.selectedTime}</p>
                  </div>
                  <div class="loc">
                    <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={solid('location-dot')} />
                    </span>
                    <p>{order.selectedCinema} </p>
                  </div>
                  <div class="tickets">
                    <p>Tickets X {order.ticketAmount}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            ))}
          </div>
        </div>
        <div className="bottom">
          <p>
          You've logged in with: {auth.user_email}
          </p>
        </div>
    </div>
    </div>
  );
};

export default UserAvatar;