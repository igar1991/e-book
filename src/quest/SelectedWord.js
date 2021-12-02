import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { Sele } from "../components/sele";
import { CheckButton } from "../components/checkButton";

export const SelectedWord = ({quiz, trueAns, arrText, arrWord, img}) => {
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
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="text-center m-1">
        {arrText.map((item, index)=><h5 className="d-inline">{item}{index<arrWord.length&&<Sele arr={arrWord[index]} addValue={addValue} n={index} />}</h5>)}
        {img&&<img src={img} alt="img" style={{width: "100%", maxHeight: 250, objectFit: 'contain'}} />}
      </div>
      
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
