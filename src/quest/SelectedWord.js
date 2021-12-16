import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { Sele } from "../components/sele";
import { CheckButton } from "../components/checkButton";

export const SelectedWord = ({quiz, trueAns, arrText, arrWord, img, imgsize, col}) => {
  const dispatch = useDispatch();

    const [state, setState]=useState([0,0,0,0,0,0,0])


  const addValue = (value, index) => {
      let arr = state.map((item,i)=>{
          if(i===index){
              return value
          } else {
              return item
          }
      })
      setState(arr)
  };

  const currentAns = () => {
    let i = trueAns.length;
    while (i--) {
      if (trueAns[i] !== state[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
    
  };

  return (
    <div  className="d-flex flex-column justify-content-between" style={{minHeight: '95vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-center" style={{minHeight: '50vh'}}>
      <div className={`${col?'d-flex flex-column':''} justify-content-center ${img&&`col-lg-7`} col-sm-11 col-11`}>
        {arrText.map((item, index)=><h4 className="d-inline">{item}{index<arrWord.length&&<Sele arr={arrWord[index]} addValue={addValue} n={index} />}</h4>)}
        </div>
        {img && <div className={`col-lg-5 col-sm-11 col-11 d-flex justify-content-center align-content-center`}>
          <img src={img} alt="Responsive" style={{ width: imgsize?imgsize: '90%', maxWidth: "90vw", objectFit: 'contain'}} />
        </div>}
        </div>
      <div>
      <CheckButton currentAns={currentAns} />
      </div>
    </div>
  );
};
