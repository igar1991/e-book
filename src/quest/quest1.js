import React from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const Quest1 = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Пример урока 1</h1>

      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => dispatch(falseAnswer(1))}>
        Неправильный ответ
          </button>
      <button type="button" className="btn btn-outline-primary btn-block" onClick={() => dispatch(trueAnswer(1))}>
        Правильный ответ
          </button>
    </div>
  )
}