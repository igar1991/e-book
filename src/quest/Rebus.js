import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const Rebus = ({ quiz, img, trueans }) => {
  const dispatch = useDispatch();

  const [value, setValue]=useState(new Array(trueans.length).fill(''))

  const currentAns = () => {
   
    let i = trueans.length;
    const arr= Array.from(trueans)
    console.log(arr);
    console.log(value)
    while (i--) {
      if (arr[i].toUpperCase() !== value[i].toUpperCase()) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex justify-content-center">
        {img&&<img src={img} className="img-fluid col-sm-11 col-lg-8" alt="rebus" />}
      </div>
      <div className="d-flex justify-content-center">
          {trueans&&trueans.split("").map((item, index)=>{
              return (
                <input
                key={index}
                type="text"
                className="text-center text-uppercase m-1"
                style={{ fontSize: "calc(1rem + 2vw)", width: "calc(1rem + 3.5vw)" }}
                maxlength="1"
                value={value[index]}
                onChange={(v)=>setValue(value.map((it,ind)=>ind===index? v.target.value : it))}
              />

              )
          })}

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
