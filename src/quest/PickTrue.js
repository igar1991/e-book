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
                <h4>{quiz2}</h4>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-9">
                    {state && state.map((item, index) => {
                        return (
                            <div className="d-flex" key={index}>
                                <div className="list-group list-group-horizontal">
                                    <button className={`fs-5 text-center list-group-item list-group-item-action d-flex align-items-center ${value[index] === arrans[0] ? "text-white bg-warning" : ""}`} onClick={() => handlerPick(arrans[0], index)}>{arrans[0]}</button>
                                    <button className={`fs-5 text-center list-group-item list-group-item-action d-flex align-items-center ${value[index] === arrans[1] ? "text-white bg-warning" : ""}`} onClick={() => handlerPick(arrans[1], index)}>{arrans[1]}</button>
                                </div>
                                <div className={`fs-5 list-group-item list-group-item-action text-center`} key={index}>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <CheckButton currentAns={currentAns} />
        </div>
    );
};
