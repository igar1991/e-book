import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Rebus = ({ quiz, img, trueans, quiz2,img2, des }) => {
  const dispatch = useDispatch();

  const [value, setValue]=useState(new Array(trueans.length).fill(''))

useEffect(()=>{
  return setValue(new Array(trueans.length).fill(''))
},[trueans.length])

  const currentAns = () => {
   
    let i = trueans.length;
    const arr= Array.from(trueans)
    while (i--) {
      if (arr[i].toUpperCase() !== value[i].toUpperCase()) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '50vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        {quiz2&&<h4>{quiz2}</h4>}
      </div>
      {img2&&      <div className="d-flex flex-wrap justify-content-center">
        <h4 className="col-sm-12 col-lg-7">{des}</h4>
        {img2&&<img src={img2} className="img-fluid col-sm-12 col-lg-5" alt="rebus" style={{maxHeight: 100, objectFit: "contain"}} />}
      </div>}
      {img&&<div className="d-flex justify-content-center">
        <img src={img} className="img-fluid col-sm-11 col-lg-8" alt="rebus" style={{maxHeight: 300, objectFit: "contain"}} />
      </div>}
      <div className="d-flex justify-content-center">
          {trueans&&value&&trueans.split("").map((item, index)=>{
              return (
                <input
                key={index}
                type="text"
                className="text-center text-uppercase m-1"
                style={{ fontSize: "calc(1rem + 2vw)", width: "calc(1rem + 3.5vw)" }}
                maxLength="1"
                value={value[index]}
                onChange={(v)=>setValue(value.map((it,ind)=>ind===index? v.target.value : it))}
              />

              )
          })}

      </div>
      <div>
      <CheckButton currentAns={currentAns} />
      </div>
    </div>
  );
};
