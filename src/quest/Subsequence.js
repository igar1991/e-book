import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Subsequence = ({ img, trueans, quiz, ans, arrans }) => {

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
      <div className="d-flex">
        <div className="col-7">
          {state && state.map((item, index) => {
            let classes = `list-group-item list-group-item-action`
            return (
              <div>

                <a href="#!" className={classes} key={index}><input
                  key={index}
                  type="text"
                  className="text-center text-uppercase m-1"
                  style={{ fontSize: "calc(0.4rem + 1vw)", width: "calc(0.3rem + 2.5vw)" }}
                  maxlength="1"
                  value={value[index]}
                  onChange={(v) => setValue(value.map((it, ind) => ind === index ? v.target.value : it))}
                />{item}</a>
              </div>
            )
          })}
        </div>
        <div className="col-5 d-flex justify-content-center align-content-center">
          <img src={img} className="m-5" alt="Responsive" />
        </div>
      </div>
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
