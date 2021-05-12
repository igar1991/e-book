import React, { useReducer } from "react";
import { ADD_START_DATA ,OPEN_MODAL_NAME, ADD_ALL_RESULT} from "../types";
import { ResultContext } from "./resultContext";
import { resultReducer } from "./resultReducer";

export const ResultState = ({ children }) => {
  const [state, dispatch] = useReducer(resultReducer, {
    titleBook: "",
    titleClass: "",
    nameStudent: "",
    numberClass: "",
    date: "",
    solvet: 2,
    error: 2,
    miss: 1,
    res: "good",
    modalName: false,
    allResult: []
  });

  const addStartdata =(nameStudent,numberClass, titleBook,titleClass )=>{
    const dateNow = new Date().toLocaleDateString()
      dispatch({
          type: ADD_START_DATA,
          payload: {nameStudent,numberClass, titleBook,titleClass, dateNow}
      })
  }

  const openModalName=()=>{
    dispatch({
      type: OPEN_MODAL_NAME
    })
  }

  const addAllResult =()=>{
    dispatch({
     type: ADD_ALL_RESULT
    })
  }

  return (
    <ResultContext.Provider value={{ stateR: state, addStartdata, openModalName, addAllResult }}>
      {children}
    </ResultContext.Provider>
  );
};
