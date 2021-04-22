import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export const Menu = () => {

  let his = useHistory()
  return (
    <div className="book">
      <div className="d-flex justify-content-around p-2">
          <h2>Математика. 2 класс.</h2>
        </div>
    <div class="m-2 row justify-content-center">
      <div class="list-group col-lg-5 mb-2">
        <button
          type="button"
          class="list-group-item list-group-item-primary list-group-item-action"
          onClick={() =>his.push("/solution")}
        >
          Тема №1. Название темы.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-primary active">
          Тема №2. Название темы.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-primary">
          Тема №3. Название темы.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-primary">
          Тема №4. Название темы.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-primary">
          Тема №5. Название темы.
        </button>
      </div>
      <div class="list-group col-lg-5 mb-2">
        <NavLink to="/solution"><button type="button" class="list-group-item list-group-item-action list-group-item-warning">
          Урок №1. Название урока.
        </button></NavLink>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №2. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №3. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №4. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №5. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №6. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №7. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №8. Название урока.
        </button>
        <button type="button" class="list-group-item list-group-item-action list-group-item-warning">
        Урок №9. Название урока.
        </button>
      </div>
    </div>
    </div>
  );
};
