import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const SelectedWord = () => {
  const dispatch = useDispatch();

  const quiz =
    "Определи, какие пропущены слова в правилах профилактики «болезней грязных рук». Выбери пропущенные слова из выпадающего списка.";

    const [state, setState]=useState([0,0,0,0,0,0])
    const trueAns = ["4", "5", "1", "2", "6", "3"]

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
      <div className="text-center m-2">
        <h5>
          Руки необходимо мыть обязательно после посещения{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 0)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>
          , по приходу с улицы и перед едой. <br />
          Мыть руки необходимо с{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 1)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>
          , тщательно тереть друг о друга.
          <br />
          Нельзя покупать продукты питания на{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 2)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>
          «с рук». Покупать продукты питания надо только у продавца в{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 3)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>{" "}
          халате (фартуке), в специальном головном{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 4)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>{" "}
          , нарукавниках.
          <br />
          Нельзя грызть{" "}
          <select
            className="form-select text-success"
            aria-label="Default select example"
            onChange={(e) => addValue(e.target.value, 5)}
          >
            <option selected> </option>
            <option value="1">улице</option>
            <option value="2">чистом</option>
            <option value="3">ногти</option>
            <option value="4">туалета</option>
            <option value="5">мылом</option>
            <option value="6">уборе</option>
          </select>{" "}
          и брать в рот ручки и карандаши.
        </h5>
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
