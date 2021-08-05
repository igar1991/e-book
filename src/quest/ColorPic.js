import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";

export const ColorPic = () => {
  return (
    <div>
      <div className="quiz-title">
        <h4>
          Если утверждение верное, закрасьте ячейку таблицы с ответом «да»
          зелёным цветом, если неверное – ячейку таблицы с ответом «нет» красным
          цветом. (цвета на палитре выбирай нажатием левой клавиши мыши; чтобы
          закрасить ячейку, нажми в ней левой клавишей мыши)
        </h4>
      </div>
      <div className="d-flex flex-row ">
      <ul className="list-group col-10">
        <div className="d-flex flex-row">
          <a href="#!" className="list-group-item list-group-item-action col-sm-8">
            Режим дня – это правильное распределение времени на сон, питание,
            работу и отдых.
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Да
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Нет
          </a>
        </div>
        <div className="d-flex flex-row">
          <a href="#!" className="list-group-item list-group-item-action col-sm-8">
            Обязательно нужно мыть руки по приходу домой, до и после еды, после
            туалета.
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Да
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Нет
          </a>
        </div>
        <div className="d-flex flex-row">
          <a href="#!" className="list-group-item list-group-item-action col-sm-8">
            Врач-офтальмолог занимается лечение зубов.
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Да
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Нет
          </a>
        </div>
        <div className="d-flex flex-row">
          <a href="#!" className="list-group-item list-group-item-action col-sm-8">
            Длительность просмотра телевизора не должна превышать 4 часов
            подряд.
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Да
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Нет
          </a>
        </div>
        <div className="d-flex flex-row">
          <a href="#!" className="list-group-item list-group-item-action col-sm-8">
            Делать прививки нужно строго по рекомендациям: между первой и
            последующими прививками должно пройти определенное время в
            зависимости от вида прививки.
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Да
          </a>
          <a href="#!" className="list-group-item list-group-item-action col-sm-2">
            Нет
          </a>
        </div>
      </ul>
      
      <CirclePicker
      className="flex-column col-2 justify-content-center align-content-center"
      circleSize={46}
        colors={[
          "#0d6efd",
          "#dc3545",
          "#198754",
          "#ffc107",
          "#fd7e14",
          "#343a40",
        ]}
        onChange={(e) => console.log(e)}
        onChangeComplete={(e) => console.log(e)}
      />
      </div>
    </div>
  );
};
