import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light mb-4">
      <form class="container-fluid justify-content-end">
          <NavLink to="/">
        <button class="btn btn btn-outline-primary m-2 btn-lg" type="button">
         Электронные тетради
        </button>
        </NavLink>
        <NavLink to="/result">
        <button class="btn btn-outline-success" type="button">
          Результаты
        </button>
        </NavLink>
      </form>
    </nav>
  );
};
