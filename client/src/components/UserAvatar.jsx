import React, { useState,useContext } from "react";
// import OrderContext, { OrderProvider } from "../providers/ContextProvider"
import AuthContext from "../providers/AuthProvider";
import { OrderContext } from "../providers/ContextProvider"

const UserAvatar = ({ open,onClose }) => {
  const [openModal, setOpenModal] = useState(false);
  const { auth } = useContext(AuthContext);

  // const { order } = useContext(OrderContext);
  const { allOrders } = useContext(OrderContext);

  if(!open) {return null}

  return (
    <div onClick={()=>{setOpenModal(false); onClose()}} className="overlay">
      <div onClick={(event)=>{event.stopPropagation()}} className="modalContainer">
    <div>
        <div className="popup">
          <div className="popup-header">
            <h3>Your Information:</h3>
          </div>
          <div className="popup-body">
            <p>Email: {auth.user_email}</p>
            {/* <p>You movie ticket: {order.title} {order.selectedDate} {order.selectedTime} {order.ticketAmount}</p> */}
            <h3>Your Tickets: </h3>
            {allOrders.map((order, index) => (
            <div key={index}>
            <p>Order {index + 1}: {order.title} {order.selectedCinema} {order.selectedDate} {order.selectedTime} {order.ticketAmount}</p>
            <img src = {order.poster}/>
            </div>
            ))}
          </div>
        </div>

    </div>
    </div>
    </div>
  );
};

export default UserAvatar;