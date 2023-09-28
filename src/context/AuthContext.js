import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [client_secret, setClient_secret] = useState(null);
  //const uri = "http://localhost:3500";
  const uri = "https://imageai-iyf3.onrender.com";

  const logout = () => {
    fetch(`${uri}/logout`, {
      method: "POST",
      credentials: "include",
    }).then(() => setToken(null));
  };
  return (
    <AuthContext.Provider
      value={{ token, setToken, uri, logout, client_secret, setClient_secret }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
