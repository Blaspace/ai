import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ setPay }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { uri } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    /*const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(PaymentElement),
    });
    if (!error) {*/
    try {
      fetch(`${uri}/stripe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 1000,
        }),
      })
        .then((res) => {
          if (res.ok) {
            res.json();
          } else if (400) {
            throw "something went wrong";
          } else {
            throw "server error";
          }
        })
        .then((data) => {
          alert("Payment successful");
          setPay(false);
        })
        .catch((err) => alert("something went wrong"));
    } catch (err) {
      console.log(err);
    }
    // }
  };

  return (
    <div className="paycon">
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button disabled={!stripe}>Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
