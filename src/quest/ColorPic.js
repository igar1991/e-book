import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";

export const ColorPic = ({arr, trueans }) => {
  const dispatch = useDispatch();

  const [arrY, setarrY] = useState(
    arr.map(() => "#fff")
  );

  const [currentColor, setCurrentColor] = useState("#fff");

  const changeColorY = (i) => {
    setarrY(
      arrY.map((item, index) =>
        index === i ?  currentColor : item
      )
    );
  };


  const currentAns = () => {
    console.log(trueans)
    console.log(arrY)
    let i = trueans.length;
    while (i--) {
      if (trueans[i] !== arrY[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

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
      <div className="d-flex flex-row justify-content-center">
        <ul className="list-group col-10">
          {arr &&
            arr.map((item, index) => {
              return (
                <div className="d-flex flex-row justify-content-center" key={index}>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action text-center col-sm-10"
                    style={{ backgroundColor: arrY[index] }}
                    onClick={() => changeColorY(index)}
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          <button
            type="button"
            className="btn btn-warning btn-block mt-2"
            onClick={() => setCurrentColor("#fff")}
          >
            Ластик
          </button>
        </ul>
        <div className="cl-par d-flex">
        <CirclePicker
          className="flex-column "
          circleSize={46}
          colors={[
            "#0d6efd",
            "#dc3545",
            "#198754",
            "#ffc107",
            "#fd7e14",
          ]}
          onChange={(e) => setCurrentColor(e.hex)}
        />
        <div className="cl-par2 ml-2"></div>
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
