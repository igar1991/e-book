import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Select = ({ img, trueans, addCl, quiz, ans, quiz2, quiz3, newquiz1, newquiz2, ansnew }) => {

  const dispatch = useDispatch();

  const anstrue = trueans.map((item) => item ? addCl : "text-dark")

  const [state, setState] = useState(null)

  useEffect(() => {
    if (ansnew) {
      setState([...ans, ...ansnew])
    } else {
      setState(ans)
    }
  }, [ans, ansnew])

  const changeClass = (index) => {
    setState(state.map((item, i) => {
      if (index === i) {
        return { q: item.q, cl: item.cl === addCl ? "text-dark" : addCl }
      }
      return item
    }))

  }

  const currentAns = () => {
    let i = anstrue.length;
    let arrstate = state.map((item) => item.cl)
    while (i--) {
      if (anstrue[i] !== arrstate[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));

  }

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        <p>{quiz2 && quiz2}</p>
        <h4>{quiz3 && quiz3}</h4>
      </div>
      <div className="d-flex flex-wrap">
        <div className="col-lg-7 col-sm-11">
          <h5>{newquiz1 && newquiz1}</h5>
          {state && state.filter((item, i) => i < ans.length).map((item, index) => {
            return (
              <button className={`list-group-item list-group-item-action text-center ${item.cl}`} key={index} onClick={() => changeClass(index)}>{item.q}</button>
            )
          })}
        </div>
        {img && <div className="col-lg-5 col-sm-11 d-flex justify-content-center align-content-center">
          <img src={img} className="m-3" alt="Responsive" style={{ maxWidth: 400 }} />
        </div>}
        <h5>{newquiz2 && newquiz2}</h5>
        {state && state.filter((item, i) => i >= ans.length).map((item, index) => {
          return (
            <button className={`list-group-item list-group-item-action text-center ${item.cl}`} key={index} onClick={() => changeClass(Number(index) + Number(ansnew.length) - 2)}>{item.q}</button>
          )
        })}
      </div>
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
