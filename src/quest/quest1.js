import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { ResultContext } from "../context/result/resultContext";
import { SolutionContext } from "../context/solution/solutionContext";

export const Quest1 =()=> {

  const {falseAnswer, trueAnswer}=useContext(SolutionContext)
 

  const {stateR}=useContext(ResultContext)
    return (
        <div>
            <h1>QUEST111</h1>
           
            <button type="button" class="btn btn-outline-primary btn-block" onClick={()=>falseAnswer(1)}>
           Неправильный ответ
          </button>
          <button type="button" class="btn btn-outline-primary btn-block" onClick={()=>trueAnswer(1)}>
            Правильный ответ
          </button>
          <Button onClick={()=>console.log(stateR)}>{stateR.res}</Button>
        </div>
    )
}