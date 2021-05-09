import React, { useReducer } from "react";
import { ADD_START_DATA } from "../types";
import { ResultContext } from "./resultContext";
import { resultReducer } from "./resultReducer";

export const ResultState = ({ children }) => {
  const [state, dispatch] = useReducer(resultReducer, {
    title: "Igor",
    theme: "histori",
    class: 1,
    date: "22.01.02",
    solvet: 2,
    error: 2,
    miss: 1,
    res: "good",
    modalName: true,
  });

  const addStartdata =()=>{
      dispatch({
          type: ADD_START_DATA
      })
  }

  return (
    <ResultContext.Provider value={{ stateR: state, addStartdata }}>
      {children}
    </ResultContext.Provider>
  );
};
