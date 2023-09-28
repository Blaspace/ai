import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <p>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "isactive" : "ispending"
          }
        >
          Home
        </NavLink>
      </p>
      <br />
      <p>
        <NavLink
          to={"image"}
          className={({ isActive, isPending }) =>
            isActive ? "isactive" : "ispending"
          }
        >
          Chat with Ai
        </NavLink>
      </p>
    </div>
  );
}

export default SideBar;
