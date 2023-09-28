import React, { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { uri, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${uri}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 401) {
          alert("wrong email/password");
          throw "error";
        } else {
          alert("server error");
          throw "error";
        }
      })
      .then((data) => {
        setToken(data);
        navigate("../");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button formAction="submit">Login</button>
        <br />
        <p>
          Don't have an accout{" "}
          <span
            onClick={() => navigate("../signup")}
            style={{ color: "green", fontWeight: 600 }}
          >
            signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
