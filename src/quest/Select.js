import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const Select = ({ img, addCl, quiz, ans, quiz2, quiz3, newquiz1, newquiz2, ansnew, gor, imgsize, random }) => {

  const dispatch = useDispatch();

  const [state, setState] = useState(null)

  useEffect(() => {
    const goans = ans.map((e,i)=>{
      return {...e, b:false}
    })
    if (ansnew) {
      const newgoans = ansnew.map((e,i)=>{
        return {...e, b:false}
      })
      if(random) {
        setState([...goans, ...newgoans])
      } else {
        setState([...goans.sort(() => Math.random() - 0.5), ...newgoans.sort(() => Math.random() - 0.5)])
      }
    } else {
      if(random) {
        setState(goans)
      } else {
        setState(goans.sort(() => Math.random() - 0.5))
      }
      
    }
  }, [ans, ansnew,random])

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
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '95vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        <h4>{quiz2 && quiz2}</h4>
        <h4>{quiz3 && quiz3}</h4>
      </div>
      <div className="d-flex flex-wrap justify-content-start ps-3" style={{minHeight: '50vh'}}>
        <div className={`d-flex flex-column justify-content-between ${img&&`col-lg-${gor?'2':'7'}`} col-sm-${gor?'2':'11'} col-${gor?'2':'11'} p-2 align-content-stretch`}>
        {newquiz1 && <h4>{newquiz1}</h4>}
          {state && state.filter((item, i) => i < ans.length).map((item, index) => {
            return (
              <h4 role="button" className={`text-start ${item.b&&addCl}`} key={index} onClick={() => changeClass(item.id)}>{item.q}</h4>
            )
          })}
        </div>
        {img && <div className={`col-lg-${gor?'9':'5'} col-sm-${gor?'9':'11'} col-${gor?'9':'11'} d-flex justify-content-center align-content-center`}>
          <img src={img} alt="Responsive" style={{ width: imgsize?imgsize: '90%', maxWidth: gor?"70vw":"90vw", objectFit: 'contain'}} />
        </div>}
        <div className={`${img&&`col-lg-${gor?'2':'11'}`} col-sm-${gor?'2':'11'} col-${gor?'2':'11'}`}>

        {newquiz2 && <h4>{newquiz2}</h4>}
        {state && state.filter((item, i) => i >= ans.length).map((item, index) => {
          return (
            <h4 role="button" className={` ${item.b&&addCl}`} key={index} onClick={() => changeClass(item.id)}>{item.q}</h4>
          )
        })}
        </div>
      </div>
      <div>
     <CheckButton currentAns={currentAns} />
     </div>
    </div>
  );
};
