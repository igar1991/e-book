import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";

export const ColorPic = ({arr, trueans }) => {
  const dispatch = useDispatch();

  const [arrY, setarrY] = useState(
    arr.map(() => {
      return {
        yes: "#fff",
        no: "#fff",
      };
    })
  );

  const [currentColor, setCurrentColor] = useState("#fff");

  const changeColorY = (i) => {
    setarrY(
      arrY.map((item, index) =>
        index === i ? { yes: currentColor, no: item.no } : item
      )
    );
  };

  const changeColorN = (i) => {
    setarrY(
      arrY.map((item, index) =>
        index === i ? { no: currentColor, yes: item.yes } : item
      )
    );
  };

  const currentAns = () => {
    let i = trueans.length;
    while (i--) {
      if (trueans[i].yes !== arrY[i].yes) return dispatch(falseAnswer(1));
      if (trueans[i].no !== arrY[i].no) return dispatch(falseAnswer(1));
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
      <div className="d-flex flex-row ">
        <ul className="list-group col-10">
          {arr &&
            arr.map((item, index) => {
              return (
                <div className="d-flex flex-row" key={index}>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action col-sm-10"
                  >
                    {item}
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action col-sm-1"
                    style={{ backgroundColor: arrY[index].yes }}
                    onClick={() => changeColorY(index)}
                  >
                    Да
                  </a>
                  <a
                    href="#!"
                    className="list-group-item list-group-item-action col-sm-1"
                    style={{ backgroundColor: arrY[index].no }}
                    onClick={() => changeColorN(index)}
                  >
                    Нет
                  </a>
                </div>
              );
            })}
          <button
            type="button"
            className="btn btn btn-outline-warning btn-block mt-2"
            onClick={() => setCurrentColor("#fff")}
          >
            Ластик
          </button>
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
          onChange={(e) => setCurrentColor(e.hex)}
        />
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
