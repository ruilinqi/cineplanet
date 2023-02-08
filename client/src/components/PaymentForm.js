import React, { useState,useContext } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios";
import './PaymentForm.css'
import cinima from "../assets/cinima.mp4"
import AuthContext from "../providers/AuthProvider";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}


export default function PaymentForm({price}) {
  const { auth } = useContext(AuthContext);
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post("http://localhost:8080/payment", {
          amount: price*100,
          id
        })

        if (response.data.success) {
          console.log("Successful payment")
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error==>', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!success ?
        <div className="paymentContainer">
          <video autoPlay loop muted playsInline className="back-video">
            <source src={cinima} type="video/mp4"></source>
          </video>
          <br/>
          <h1>{auth.user_email}</h1>
          <h1>Welcome to cineplanet!</h1>
          <br/>
          <form onSubmit={handleSubmit} className='paymentForm'>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button id ="payButton">Pay</button>
          </form>
        </div>
        : <div className="paymentContainer">
          <div className="paymentDetail">
          <video autoPlay loop muted playsInline className="back-video">
            <source src={cinima} type="video/mp4"></source>
          </video>
            <h2>Success!! 🥳</h2>
            <h3>{auth.user_email}</h3>
          </div>
        </div>
      }
    </>
  )
}