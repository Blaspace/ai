import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import StripeConfig from "../component/StripeConfig";

function Index() {
  const { uri, setClient_secret } = useContext(AuthContext);
  const [pay, setPay] = useState(false);
  const handlepay = () => {
    setPay(true);
  };

  useEffect(() => {
    fetch(`${uri}/secret`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: 1000,
        currency: "usd",
        description: "ai image generator",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClient_secret(data.client_secret);
      });
  }, []);
  return (
    <div className="index">
      <h1>hello from index js</h1>
      <div>
        {pay ? (
          <StripeConfig setPay={setPay} />
        ) : (
          <div className="card">
            <p>subscribe for premium</p>
            <br />
            <h2>10$</h2>
            <button onClick={handlepay}>make payment</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
