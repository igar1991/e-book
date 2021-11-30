import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Subsequence = ({ img, trueans, quiz, ans, arrans, col }) => {

  const dispatch = useDispatch();

  const [state, setState] = useState(null)
  const [value, setValue] = useState(arrans)

  useEffect(() => {
    setState(ans)
  }, [ans])

  const currentAns = () => {
    console.log(trueans)
    console.log(value)

    let i = trueans.length;
    while (i--) {
      if (trueans[i] !== value[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };


  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={`col-${col[0]} col-md-${col[2]}`}>
          {state && state.map((item, index) => {
            return (
              <div key={index}>

                <button className={`fs-5 list-group-item list-group-item-action`} key={index}><input
                  key={index}
                  type="text"
                  className="fs-5 text-center text-uppercase m-1"
                  style={{ width: "5vw", minWidth: "35px" }}
                  maxlength="1"
                  value={value[index]}
                  onChange={(v) => setValue(value.map((it, ind) => ind === index ? v.target.value : it))}
                />{item}</button>
              </div>
            )
          })}
        </div>
        {img && <div className={`col-${col[1]} col-md-${col[3]} d-flex justify-content-center p-1`}>
          <img src={img} style={{ width: "100%" }} alt="Responsive" />
        </div>}

      </div>
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
