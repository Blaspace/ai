import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const uri = "http://localhost:3500";
  return (
    <UserContext.Provider value={{ token, setToken, uri }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
