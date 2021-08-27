import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const ColorWord = () => {
  const dispatch = useDispatch();

  const quiz =
    "Помни, что соблюдение чистоты тела, белья, одежды и жилища помогут сохранить и укрепить здоровье. Найди в таблице пропущенные слова в каждой пословице. Закрась клеточки с буквами, которые образуют эти слова, соответствующим цветом.(цвета выбирай нажатием левой клавиши мыши в цветных прямоугольниках; чтобы закрасить клетку, нажми в ней левой клавишей мыши)";

  const currentAns = () => {
    console.log("yet");
  };

  const arrquiz = [
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "A", cl: "#fff" },
  ];

  const [arrClass, setArrClass] = useState(arrquiz);

  const [curColor, setCurColor] = useState("#fff");

  const changeCurr = (color)=>{
    setCurColor(color)
  }

  const changeBackground = (index) => {
    setArrClass(
      arrClass.map((item, i) => {
        if (index == i) {
          return { word: item.word, cl: curColor };
        } else {
          return item;
        }
      })
    );
    console.log(arrquiz);
  };

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex">
        <div className="col-5 m-5">
          <ul className="list-group text-center d-flex flex-row flex-wrap">
            {arrClass &&
              arrClass.map((item, index) => {
                return (
                  <a
                    href="#!"
                    key={index}
                    className="col-2 list-group-item list-group-item-action"
                    style={{ backgroundColor: item.cl }}
                    onClick={() => changeBackground(index)}
                  >
                    {item.word}
                  </a>
                );
              })}
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-group d-flex h-75 justify-content-between">
            <a
              href="#!"
              className="col-4 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "red" }}
              onClick={() => changeCurr("red")}
            ></a>
            <a
              href="#!"
              className="col-4 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "red" }}
              onClick={() => changeCurr("black")}
            ></a>
            <a
              href="#!"
              className="col-4 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "red" }}
              onClick={() => changeCurr("gray")}
            ></a>
            
          </ul>
        </div>
      </div>
      <div className="quiz-btn">
        <button
          type="button"
          className="btn btn btn-success btn-block"
          onClick={currentAns}
        >
          Проверить
        </button>
      </div>
    </div>
  );
};
