import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const Emphas = ({ quiz, ans, trueans }) => {
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [tree, setTree] = useState(null);
  const dispatch = useDispatch();


  const clr = ["#198754", "#6f42c1", "#dc3545", "#198754"];

  const toggle = (i, index) => {
    if (index === 0) {
      setOne(i);
    } else if (index === 1) {
      setTwo(i);
    } else {
      setTree(i);
    }
  };

  const activeCl = (i, index) => {
    if (index === 0) {
      if (i === one) {
        return "list-group-item list-group-item-action text-center active";
      } else {
        return "list-group-item list-group-item-action text-center";
      }
    } else if (index === 1) {
      if (i === two) {
        return "list-group-item list-group-item-action text-center active";
      } else {
        return "list-group-item list-group-item-action text-center";
      }
    } else {
      if (i === tree) {
        return "list-group-item list-group-item-action text-center active";
      } else {
        return "list-group-item list-group-item-action text-center";
      }
    }
  };

  const currentAns = () => {
    let i = trueans.length;
    let arrstate = [one,two,tree]
    while (i--) {
      if (trueans[i] !== arrstate[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

  return (
    <>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex flex-lg-row flex-column  justify-content-lg-around">
        {ans &&
          ans.map((item, index) => {
            return (
              <div className="col-lg-3 col-12 mb-2 mt-2">
                <div
                  className="text-center text-white border border-dark rounded p-2"
                  key={index}
                  style={{
                    fontSize: "calc(0.8rem + .7vw)",
                    backgroundColor: `${clr[index]}`,
                  }}
                >
                  {item.q}
                </div>
                <div
                  className="list-group"
                  style={{
                    fontSize: "calc(0.8rem + .7vw)",
                  }}
                >
                  {item.arr.map((i, ind) => (
                    <a
                      key={ind}
                      href="#!"
                      className={activeCl(ind, index)}
                      onClick={() => toggle(ind, index)}
                    >
                      {i}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
      <div className="quiz-btn">
        <button
            className="btn btn-success w-100 btn-lg"
            onClick={currentAns}
          >
            Проверить
          </button>
      </div>
    </>
  );
};
