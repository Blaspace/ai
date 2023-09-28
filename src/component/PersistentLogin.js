import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../context/AuthContext";

function PersistentLogin() {
  const { uri, token, logout, setToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const persistentlogin = () => {
      fetch(`${uri}/refresh`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 401) {
            logout();
          }
        })
        .then((data) => setToken(data.accesstoken))
        .finally(() => setLoading(false));
    };

    !token ? persistentlogin() : setLoading(false);
  }, []);
  return <>{loading ? <Loading /> : <Outlet />}</>;
}

export default PersistentLogin;
