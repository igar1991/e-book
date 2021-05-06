import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { SolutionContext } from "../context/solution/solutionContext";

export const Quest1 =()=> {

  const {falseAnswer, trueAnswer}=useContext(SolutionContext)
    return (
        <div>
            <h1>QUEST111</h1>
           
            <button type="button" class="btn btn-outline-primary btn-block" onClick={()=>falseAnswer(1)}>
           Неправильный ответ
          </button>
          <button type="button" class="btn btn-outline-primary btn-block" onClick={()=>trueAnswer(1)}>
            Правильный ответ
          </button>
          <Button>1111111</Button>
        </div>
    )
}