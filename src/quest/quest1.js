import React, { useContext } from "react";
import { SolutionContext } from "../context/solution/solutionContext";

export const Quest1 = () => {

  const { falseAnswer, trueAnswer } = useContext(SolutionContext)

  return (
    <div>
      <h1>Пример урока 1</h1>

      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => falseAnswer(1)}>
        Неправильный ответ
          </button>
      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => trueAnswer(1)}>
        Правильный ответ
          </button>
    </div>
  )
}