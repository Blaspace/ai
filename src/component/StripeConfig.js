import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Checkout";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publishablekey =
  "pk_test_51Nv5SQAGawwzCB9CE1iH1XADNkxevSsDnexfxCcCSlSkZXIgIah0mhdgyvLpwtimJPrI0XyX9JBWXnkKW3HmOHl600eqaSDtlG";
const stripePromise = loadStripe(publishablekey);

const StripeConfig = ({ setPay }) => {
  const { client_secret } = useContext(AuthContext);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: client_secret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm setPay={setPay} />
    </Elements>
  );
};

export default StripeConfig;
