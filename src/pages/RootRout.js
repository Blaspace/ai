import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/SideBar";
import Nav from "../component/Nav";

function RootRout() {
  return (
    <div className="rootRoute">
      <SideBar />
      <section>
        <Nav />
        <Outlet />
      </section>
    </div>
  );
}

export default RootRout;
