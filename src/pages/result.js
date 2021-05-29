import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { ResultContext } from "../context/result/resultContext";

export const Result = () => {

  //const { allResult } = useContext(ResultContext)

  const allResult = useSelector(state=>state.resultReducer.allResult)
  console.log(allResult)

  return (
    <div className="book" style={{ minHeight: "40rem" }}>
      <div className="d-flex justify-content-around p-2">
        <h2>Результаты</h2>
      </div>
      <div className="row justify-content-around p-4">
        {allResult && allResult.map((item, index) => {
          return (
            <div className="resultcards col-lg-2 col-md-6 m-1" key={index}>
              <h3>{item.titleBook}</h3>
              <h4>{item.titleClass}</h4>
              <hr />
              <h4>{item.nameStudent}</h4>
              <h5>{item.date}</h5>
              <hr />
              <h4 className="text-success">Выполнено: {item.solvet}</h4>
              <h4 className="text-danger">Ошибок: {item.error}</h4>
              <h4 className="text-warning">Пропущено: {item.miss}</h4>
              <hr />
              <h3 className="text-success">{item.res}</h3>
            </div>
          )
        })}

      </div>
    </div>
  );
};
