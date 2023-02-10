import React, { createContext, useState } from "react";

export const OrderContext = createContext({});

const OrderProvider = (props) => {

  const [order, setOrder] = useState({
    title: "",
    selectedDate: "",
    selectedTime: "",
    ticketAmount: "",
  });

return (
  <OrderContext.Provider value={{order, setOrder}}>
    {props.children}
  </OrderContext.Provider>
);
};
export default OrderProvider;