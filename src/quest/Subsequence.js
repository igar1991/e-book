import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const Subsequence = ({img,trueans, quiz, ans}) => {

  const dispatch = useDispatch();

  const [state, setState]= useState(null)

  useEffect(()=>{
    setState(ans)
  },[quiz])

  const currentAns =()=>{
    let i = trueans.length;
    let arrstate = state.map((item)=>item.cl)
    while (i--) {
      if (trueans[i] !== arrstate[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));

  }

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>                                              
      </div>
      <div className="d-flex">
      <div className="col-7">
      {state&&state.map((item, index)=>{
        let classes = `list-group-item list-group-item-action text-center`
        return (
          <a href="#!" className={classes} key={index}>{item}</a>
        )
      })}
      </div>
      <div className="col-5 d-flex justify-content-center align-content-center">
      <img src={img} className="m-5" alt="Responsive image" />
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
