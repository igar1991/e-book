import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <form className="container-fluid justify-content-end">
          <NavLink to="/">
        <button className="btn btn btn-outline-primary m-2 btn-lg" type="button">
         Электронные тетради
        </button>
        </NavLink>
        <NavLink to="/result">
        <button className="btn btn-outline-success" type="button">
          Результаты
        </button>
        </NavLink>
      </form>
    </nav>
  );
};
