import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../file/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid d-flex flex-row">
      <NavLink to="/">
        <img src={logo} alt="" width="80%" height="80%" />
      </NavLink>
      <form>
        <NavLink to="/">
          <button
            className="btn btn btn-outline-primary m-2 btn-lg"
            type="button"
          >
            Электронная тетрадь
          </button>
        </NavLink>
        <NavLink to="/result">
          <button className="btn btn-outline-success" type="button">
            Результаты
          </button>
        </NavLink>
      </form>
      </div>
    </nav>
  );
};
