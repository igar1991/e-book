import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Select = ({ img, addCl, quiz, ans, quiz2, quiz3, newquiz1, newquiz2, ansnew, gor }) => {

  const dispatch = useDispatch();

  const [state, setState] = useState(null)

  useEffect(() => {
    const goans = ans.map((e,i)=>{
      return {...e, b:false}
    }).sort(() => Math.random() - 0.5)
    if (ansnew) {
      const newgoans = ansnew.map((e,i)=>{
        return {...e, b:false}
      }).sort(() => Math.random() - 0.5)
      setState([...goans, ...newgoans])
    } else {
      setState(goans)
    }
  }, [ans, ansnew])

  const changeClass = (id) => {
    const newarrr = state.map((it)=>it.id===id?{...it,b: !it.b }:it)
    setState(newarrr)
  }

  const currentAns = () => {
    for(let i=0; i<state.length; i++) {
      if(state[i].a!==state[i].b) {
      return dispatch(falseAnswer(1))
      } 
    }
    dispatch(trueAnswer(1))
  }

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        <p>{quiz2 && quiz2}</p>
        <h4>{quiz3 && quiz3}</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className={`${img&&`col-lg-${gor?'2':'7'}`} col-sm-${gor?'2':'11'} col-${gor?'2':'11'}`}>
          <h5>{newquiz1 && newquiz1}</h5>
          {state && state.filter((item, i) => i < ans.length).map((item, index) => {
            return (
              <button className={`list-group-item list-group-item-action text-center ${item.b&&addCl}`} key={index} onClick={() => changeClass(item.id)}>{item.q}</button>
            )
          })}
        </div>
        {img && <div className={`col-lg-${gor?'9':'5'} col-sm-${gor?'9':'11'} col-${gor?'9':'11'} d-flex justify-content-center align-content-center`}>
          <img src={img} className="m-3" alt="Responsive" style={{ maxWidth: gor?"70vw":400, height: 'auto'}} />
        </div>}
        <h5>{newquiz2 && newquiz2}</h5>
        {state && state.filter((item, i) => i >= ans.length).map((item, index) => {
          return (
            <button className={`list-group-item list-group-item-action text-center ${item.b&&addCl}`} key={index} onClick={() => changeClass(item.id)}>{item.q}</button>
          )
        })}
      </div>
     <CheckButton currentAns={currentAns} />
    </div>
  );
};
