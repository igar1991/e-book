import React, {useContext} from "react";
import { NavLink, useHistory } from "react-router-dom";
import { BookContext } from "../context/book/bookContext";

export const Menu = () => {
  const {book} = useContext(BookContext)
  let his = useHistory()
  return (
    <div className="book">
      <div className="d-flex justify-content-around p-2">
          <h2>Математика. 2 класс.</h2>
        </div>
    <div className="m-2 row justify-content-center">
      <div className="list-group col-lg-5 mb-2">  
      {book&&book.theme.map((item, index)=>{
        return(
          <button
          key={index}
          type="button"
          className="list-group-item list-group-item-primary list-group-item-action"
          onClick={() =>console.log(1)}
        >
          {item.title}
        </button>
        )
      })}
      </div>
      <div class="list-group col-lg-5 mb-2">
        <NavLink to="/solution"><button type="button" class="list-group-item list-group-item-action list-group-item-warning" onClick={()=>console.log(book)}>
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
