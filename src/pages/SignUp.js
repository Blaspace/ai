import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const { uri } = useContext(AuthContext);

  const handleSignUp = () => {
    fetch(`${uri}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        phone,
        email,
        fullname,
      }),
    })
      .then(() => {
        navigate("../login");
      })
      .catch((err) => console.log(err));
  };

  const navigate = useNavigate();
  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="fullname..."
          onChange={(e) => setFullname(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="phone number..."
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleSignUp}>Signup</button>
        <br />
        <p>
          Already have an account{" "}
          <span
            style={{ color: "green", fontWeight: 600 }}
            onClick={() => navigate("../login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
