import React, { useEffect, useState } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const PickTrue = ({ trueans, quiz, ans, arrans, quiz2 }) => {

    const dispatch = useDispatch();
    const newArr = ans.map((i, ind) => ind)

    const [state, setState] = useState(null)
    const [value, setValue] = useState(newArr)

    useEffect(() => {
        setState(ans)
    }, [ans])

    const currentAns = () => {

        let i = trueans.length;
        while (i--) {
            if (trueans[i] !== value[i]) return dispatch(falseAnswer(1));
        }
        return dispatch(trueAnswer(1));
    };

    const handlerPick = (text, i) => {
        const arr = value.map((item, index) => index === i ? text : item)
        setValue(arr)
    }


    return (
        <div>
            <div className="quiz-title">
                <h4>{quiz}</h4>
            </div>
            <div className="quiz-title">
                <h5>{quiz2}</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-11">
                    {state && state.map((item, index) => {
                        let classes = `list-group-item list-group-item-action`
                        return (
                            <div className="d-flex">
                                <div className="list-group list-group-horizontal">
                                    <button href="#!" className={`list-group-item list-group-item-action d-flex align-items-center ${value[index] === arrans[0] ? "active" : ""}`} onClick={() => handlerPick(arrans[0], index)}>{arrans[0]}</button>
                                    <button href="#!" className={`list-group-item list-group-item-action d-flex align-items-center ${value[index] === arrans[1] ? "active" : ""}`} onClick={() => handlerPick(arrans[1], index)}>{arrans[1]}</button>
                                </div>
                                <a href="#!" className={classes} key={index}>{item}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <CheckButton currentAns={currentAns} />
        </div>
    );
};
