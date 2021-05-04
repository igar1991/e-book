import React, { useReducer } from "react";
import { ADD_QUEST, FALSE_ANSWER, TRUE_ANSWER } from "../types";
import { SolutionContext } from "./solutionContext";
import { solutionReducer } from "./solutionReducer";

export const SolutionState = ({ children }) => {
  const [state, dispatch] = useReducer(solutionReducer, {
    allquests: null,
    currentQuest: 1,
    currentsolut: false,
  });

  const addQuest = (item) => {
    dispatch({
      type: ADD_QUEST,
      payload: item,
    });
  };

  const falseAnswer =(i)=>{
    dispatch({
      type: FALSE_ANSWER,
      payload: i
    })
  }

  const trueAnswer =(i)=>{
    dispatch({
      type: TRUE_ANSWER,
      payload: i
    })
  }

  return (
    <SolutionContext.Provider
      value={{
        allQuests: state.allquests,
        addQuest,
        current: state.currentQuest,
        currentsolut: false
      }}
    >
      {children}
    </SolutionContext.Provider>
  );
};
