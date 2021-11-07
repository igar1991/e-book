import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const ColorWord = () => {
  const dispatch = useDispatch();

  const quiz =
    "Помни, что соблюдение чистоты тела, белья, одежды и жилища помогут сохранить и укрепить здоровье. Найди в таблице пропущенные слова в каждой пословице. Закрась клеточки с буквами, которые образуют эти слова, соответствующим цветом.(цвета выбирай нажатием левой клавиши мыши в цветных прямоугольниках; чтобы закрасить клетку, нажми в ней левой клавишей мыши)";

  

  const arrquiz = [
    { word: "Р", cl: "#fff" },
    { word: "У", cl: "#fff" },
    { word: "Х", cl: "#fff" },
    { word: "И", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "Т", cl: "#fff" },
    { word: "Н", cl: "#fff" },
    { word: "Б", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "Ч", cl: "#fff" },
    { word: "И", cl: "#fff" },
    { word: "О", cl: "#fff" },
    { word: "А", cl: "#fff" },
    { word: "У", cl: "#fff" },
    { word: "К", cl: "#fff" },
    { word: "A", cl: "#fff" },
    { word: "С", cl: "#fff" },
    { word: "Т", cl: "#fff" },
  ];

  const truearr = [
    { word: "Р", cl: "#32adf0" },
    { word: "У", cl: "#32adf0" },
    { word: "Х", cl: "#32adf0" },
    { word: "И", cl: "#32adf0" },
    { word: "A", cl: "#f74f5a" },
    { word: "Т", cl: "#f74f5a" },
    { word: "Н", cl: "#18d945" },
    { word: "Б", cl: "#32adf0" },
    { word: "A", cl: "#32adf0" },
    { word: "Ч", cl: "#f74f5a" },
    { word: "И", cl: "#f74f5a" },
    { word: "О", cl: "#f74f5a" },
    { word: "А", cl: "#18d945" },
    { word: "У", cl: "#18d945" },
    { word: "К", cl: "#18d945" },
    { word: "A", cl: "#18d945" },
    { word: "С", cl: "#f74f5a" },
    { word: "Т", cl: "#f74f5a" },
  ];

  const currentAns = () => {
    let i = truearr.length;
    while (i--) {
      if (truearr[i].cl !== arrClass[i].cl) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  
  };

  const [arrClass, setArrClass] = useState(arrquiz);

  const [curColor, setCurColor] = useState("#fff");

  const changeCurr = (color)=>{
    setCurColor(color)
  }

  const changeBackground = (index) => {
    setArrClass(
      arrClass.map((item, i) => {
        if (index === i) {
          return { word: item.word, cl: curColor };
        } else {
          return item;
        }
      })
    );
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
                    className="col-2 list-group-item list-group-item-action font-weight-bolder"
                    style={{ backgroundColor: item.cl }}
                    onClick={() => changeBackground(index)}
                  >
                    {item.word}
                  </a>
                );
              })}
          </ul>
        </div>
        <div className="col-6">
          <ul className="list-group d-flex h-75 justify-content-between">
            <div className="d-flex  text-center" style={{minHeight: 75}}>
            <a
              href="#!"
              className="col-2 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "#32adf0"}}
              onClick={() => changeCurr("#32adf0")}
            ></a>
             <h4>У неряхи да непряхи нет и путной ___.</h4>
             </div>
             <div className="d-flex  text-center" style={{minHeight: 75}}>
            <a
              href="#!"
              className="col-2 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "#f74f5a"}}
              onClick={() => changeCurr("#f74f5a")}
            ></a>
             <h4>___— залог здоровья.</h4>
             </div>
             <div className="d-flex  text-center" style={{minHeight: 75}}>
            <a
              href="#!"
              className="col-2 list-group-item list-group-item-action m-2"
              style={{ backgroundColor: "#18d945"}}
              onClick={() => changeCurr("#18d945")}
            ></a>
             <h4>Гигиена – не мука, гигиена – не скука, а важная ___.</h4>
             </div>
            
           
            
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
