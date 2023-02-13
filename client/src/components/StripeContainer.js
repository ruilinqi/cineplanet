import React from "react";
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = 'pk_test_51MTqwzEkdfat48CCPEMNAdjP5gY3GWwX5QSCxvuYx0cbA3YB3jDcCZElf6xzYKXzM2k83II0vhmr9IHvRkrG0yhF00IBYRGYP4';

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({open, title, price, selectedCinema, selectedDate, selectedTime, ticketAmount, poster, onClose}){
  if(!open) return null
  return(
    <Elements stripe={stripeTestPromise}>
        <PaymentForm title={title} price = {price} selectedCinema={selectedCinema} selectedDate={selectedDate} selectedTime={selectedTime} ticketAmount={ticketAmount} poster={poster} onClose={onClose}/>
    </Elements>
  )
}