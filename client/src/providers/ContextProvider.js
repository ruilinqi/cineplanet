import React, { createContext, useState } from "react";

export const OrderContext = createContext({});

const OrderProvider = (props) => {
  const storedUserEmail = window.localStorage.getItem("user_email");
  const parsedUserEmail = JSON.parse(storedUserEmail);

  // const storedOrderTitle = window.localStorage.getItem("title")
  // const storedOrderDate = window.localStorage.getItem("selectedDate")
  // const storedOrderTime = window.localStorage.getItem("selectedTime")
  // const storedOrderAmount = window.localStorage.getItem("ticketAmount")

  // const parsedOrderTitle = JSON.parse(storedOrderTitle);
  // const parsedOrderDate = JSON.parse(storedOrderDate);
  // const parsedOrderTime = JSON.parse(storedOrderTime);
  // const parsedOrderAmount = JSON.parse(storedOrderAmount);
  const storedUserOrders = window.localStorage.getItem(`orders_${parsedUserEmail}`);
  const parsedUserOrders = JSON.parse(storedUserOrders);
  const [allOrders, setAllOrders] = useState(parsedUserOrders || []);

//   const [allOrders, setAllOrders] = useState([{
//     title: parsedOrderTitle,
//     selectedDate: parsedOrderDate,
//     selectedTime: parsedOrderTime,
//     ticketAmount: parsedOrderAmount,
// }]);

React.useEffect(() => {
  window.localStorage.setItem(`orders_${parsedUserEmail}`, JSON.stringify(allOrders));
}, [allOrders]);


return (
  <OrderContext.Provider value={{allOrders, setAllOrders}}>
    {props.children}
  </OrderContext.Provider>
);
};
export default OrderProvider;