import React from "react";
import { useDispatch } from "react-redux";
import img1 from "../file/1.png";
import img2 from "../file/2.png";
import img3 from "../file/3.png";
import { NavLink } from "react-router-dom";
import { DATA } from "../DATA";

import { addBook, clearTheme } from "../redux/action";


export const Book = () => {
  const dispatch = useDispatch();

  return (
    <div className="row justify-content-around">
      <div className="col-lg-8 book" style={{ minHeight: "500px" }}>
        <div className="d-flex justify-content-around p-2">
          <h2>Наши тетради</h2>
        </div>
        <div className="row justify-content-around">
          {DATA.map((item) => {
            return (
              <div
                className="card mt-2 mb-2"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img
                  src={item.titleimg}
                  className="img-thumbnail card-img-top"
                  alt="2"
                ></img>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <h5 className="card-title">{item.class}</h5>
                  <p className="card-text">{`${item.theme.length} раздела и 60 тем`}</p>
                  <NavLink to="menu">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => {

                        dispatch(addBook(item))
                        dispatch(clearTheme())
                      }}
                    >
                      Перейти
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-lg-3 advantages">
        <div className="d-flex justify-content-around p-2">
          <h2>Преимущества.</h2>
        </div>
        <div className="mb-5">
          <img
            src={img2}
            className="rounded mx-auto d-block"
            alt="1"
            style={{ width: "100px" }}
          ></img>
          <h4 style={{ textAlign: "center" }}>
            Можно выполнять на любом устройстве.
          </h4>
        </div>
        <div className="mb-5">
          <img
            src={img1}
            className="rounded mx-auto d-block"
            alt="1"
            style={{ width: "100px" }}
          ></img>
          <h4 style={{ textAlign: "center" }}>
            Готовые и разнообразные задания.
          </h4>
        </div>
        <div className="mb-5">
          <img
            src={img3}
            className="rounded mx-auto d-block"
            alt="1"
            style={{ width: "100px" }}
          ></img>
          <h4 style={{ textAlign: "center" }}>
            Больше свободного времени для учителя.
          </h4>
        </div>
      </div>
    </div>
  );
};
