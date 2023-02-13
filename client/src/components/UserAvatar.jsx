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
            <h1 className="upcomming">Your Tickets</h1>
            {allOrders.map((order, index) => (
            <div key={index}>
            {/* <p>Order {index + 1}: {order.title} {order.selectedCinema} {order.selectedDate} {order.selectedTime} {order.ticketAmount}</p> */}
            
            <div className="container">
              <div className="item columns is-centered">
                <div className="item-right">
                  <img src = {order.poster}/>
                  <span className="up-border"></span>
                  <span className="down-border"></span>
                </div>
                
                <div className="item-left">
                  <p className="event">Movie</p>
                  <h2 className="title">{order.title}</h2>
                  
                  <div className="sce">
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
                  <div className="loc">
                    <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={solid('location-dot')} />
                    </span>
                    <p>{order.selectedCinema} </p>
                  </div>
                  <div className="tickets">
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