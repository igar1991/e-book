import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Subsequence = ({ img, trueans, quiz, ans, arrans, col, imgsize }) => {

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
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '50vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={`d-flex flex-column justify-content-between col-${col[0]} col-md-${col[2]}`}>
          {state && state.map((item, index) => {
            return (
              <div key={index}>

                <h4 role="button" key={index}><input
                  key={index}
                  type="text"
                  className="fs-5 text-center text-uppercase m-1 mb-3"
                  style={{ width: "5vw", minWidth: "35px" }}
                  maxLength="1"
                  value={value[index]}
                  onChange={(v) => setValue(value.map((it, ind) => ind === index ? v.target.value : it))}
                />{item}</h4>
              </div>
            )
          })}
        </div>
        {img && <div className={`col-${col[1]} col-md-${col[3]} d-flex justify-content-center p-1`}>
          <img src={img} style={{ width: imgsize?imgsize: '100%', objectFit: 'contain' }} alt="Responsive" />
        </div>}

      </div>
      <div>
      <CheckButton currentAns={currentAns} />
      </div>
    </div>
  );
};
