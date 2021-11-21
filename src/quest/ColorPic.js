import React, { useState, useEffect } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { CheckButton } from "../components/checkButton";

export const ColorPic = ({arr, trueans, ans, dec }) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    setarrY(arr.map(() => "#fff"))
  },[arr])

  const [arrY, setarrY] = useState(null);

  const [currentColor, setCurrentColor] = useState("#fff");

  const changeColorY = (i) => {
    setarrY(
      arrY.map((item, index) =>
        index === i ?  currentColor : item
      )
    );
  };


  const currentAns = () => {
    let i = trueans.length;
    while (i--) {
      if (trueans[i] !== arrY[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));

  };

  return (
    <div>
      <div className="quiz-title">
        <h4>{ans}</h4>
        {dec&&<p>{dec}</p>}
      </div>
      <div className="d-flex flex-row justify-content-center">
        <ul className="list-group col-9 col-sm-6 col-lg-10 col-md-10 me-2">
          {arrY &&
            arr.map((item, index) => {
              return (
                <div className="d-flex flex-row justify-content-center" key={index}>
                  <button
                    className="list-group-item list-group-item-action text-center col-sm-10"
                    style={{ backgroundColor: arrY[index] }}
                    onClick={() => changeColorY(index)}
                  >
                    {item}
                  </button>
                </div>
              );
            })}
            <div className="d-flex flex-row-reverse">
            <button
            type="button"
            className="btn btn-warning btn-block mt-2 col-5 col-sm-5 col-lg-3 col-md-4 text-white"
            onClick={() => setCurrentColor("#fff")}
          >
            Ластик
          </button>
          </div>
        </ul>
        
        <div className="cl-par d-flex">
        <CirclePicker
          className="flex-column "
          circleSize={46}
          colors={[
            "#32adf0",
            "#f74f5a",
            "#18d945",
            "#ffc107",
            "#fd7e14",
          ]}
          onChange={(e) => setCurrentColor(e.hex)}
        />
        <div className="cl-par2 ml-2"></div>
        </div>
        
      </div>
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
