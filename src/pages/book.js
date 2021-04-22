import React from "react";
import img1 from "../file/1.png";
import img2 from "../file/2.png";
import img3 from "../file/3.png";
import img1k from "../file/1k.png";
import img2k from "../file/2k.png";
import img3k from "../file/3k.png";
import { NavLink } from "react-router-dom";

export const Book = () => {
  return (
    <div className="row justify-content-around">
      <div className="col-lg-8 book" style={{ minHeight: "500px" }}>
        <div className="d-flex justify-content-around p-2">
          <h2>Наши тетради</h2>
        </div>
        <div className="row justify-content-around">
        <div className="card mt-2 mb-2" style={{ width: "18rem" }}>
          <img src={img1k} className="img-thumbnail card-img-top" alt="2"></img>
          <div className="card-body">
            <h4 className="card-title">Математика</h4>
            <h5 className="card-title">2-3 класс</h5>
            <p className="card-text">25 уроков 250 упражнений</p>
            <NavLink to="menu"><button className="btn btn-primary" type="submit">Перейти</button></NavLink>
          </div>
        </div>
        <div className="card mt-2 mb-2" style={{ width: "18rem" }}>
          <img src={img2k} className="img-thumbnail card-img-top" alt="2"></img>
          <div className="card-body">
            <h4 className="card-title">Биология</h4>
            <h5 className="card-title">Скоро появится</h5>

            <p className="card-text">25 уроков 250 упражнений</p>
            <button className="btn btn-primary" type="submit" disabled>Перейти</button>
          </div>
        </div>
        <div className="card mt-2 mb-2" style={{ width: "18rem" }}>
          <img src={img3k} className="img-thumbnail card-img-top" alt="2"></img>
          <div className="card-body">
            <h4 className="card-title">История</h4>
            <h5 className="card-title">Скоро появится</h5>
            <p className="card-text">25 уроков 250 упражнений</p>
            <button className="btn btn-primary" type="submit" disabled>Перейти</button>
          </div>
        </div>
        </div>
      </div>
      <div className="col-lg-3 advantages">
        <div className="d-flex justify-content-around p-2">
          <h2>Преимущества</h2>
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
