import React, { useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Emphas = ({ quiz, ans, trueans, ansImg }) => {

  const [value, setValue] = useState({});

  const dispatch = useDispatch();


  const clr = ["#198754", "#6f42c1", "#dc3545", "#198754"];

  const toggle = (i, index) => {
    setValue({...value, [index]: i})
  };

  const currentAns = () => {
    let i = trueans.length;
    let arrstate = []

    for( let j =0; j<i; j++) {
      arrstate.push(value[j])
    }    
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
              <div key={index} className="col-lg-3 col-12 mb-2 mt-2">
                {!ansImg && <div
                  className="text-center text-white border border-dark rounded p-1"
                  style={{
                    fontSize: "calc(0.8rem + .7vw)",
                    backgroundColor: `${clr[index]}`,
                  }}
                >
                  {item.q}
                </div>}
                {ansImg && <div className="d-flex justify-content-center"><img src={item.q} alt="1" style={{ width: "100%", objectFit: "contain", maxWidth: 300 }} /></div>}

                <div
                  className="list-group"
                  style={{
                    fontSize: "calc(0.8rem + .7vw)",
                  }}
                >
                  {item.arr.map((i, ind) => (
                    <button
                      key={ind}
                     className={`list-group-item list-group-item-action text-center ${value[index]===ind&&'active'}`}
                      onClick={() => toggle(ind, index)}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
      <CheckButton currentAns={currentAns} />
    </>
  );
};
