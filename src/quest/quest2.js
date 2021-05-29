import React, { useContext } from "react";
import { SolutionContext } from "../context/solution/solutionContext";
import {falseAnswer, trueAnswer} from "../redux/action";
import { useDispatch } from "react-redux";



export const Quest2 = () => {

  //const { falseAnswer, trueAnswer } = useContext(SolutionContext)
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Пример урока 2</h1>

      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => dispatch(falseAnswer(1))}>
        Неправильный ответ
          </button>
      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => dispatch(trueAnswer(1))}>
        Правильный ответ
          </button>
    </div>
  )
}