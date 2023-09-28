import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "isactive" : "ispending"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/image"}
          className={({ isActive, isPending }) =>
            isActive ? "isactive" : "ispending"
          }
        >
          Chat with ai
        </NavLink>
      </li>
    </nav>
  );
}

export default Nav;
