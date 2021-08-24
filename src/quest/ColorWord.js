import React from "react";
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

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="col-5">
      <ul className="list-group text-center d-flex flex-row flex-wrap">
        {arrquiz&&arrquiz.map((item, index)=>{
            return <a href="#!" key={index} className="col-2 list-group-item list-group-item-action" style={{backgroundColor: item.cl}}>
            {item.word}
          </a>
        })}
        
      </ul>
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
