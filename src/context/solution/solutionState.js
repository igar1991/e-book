import React, { useReducer } from "react";
import {
  ADD_QUEST,
  FALSE_ANSWER,
  TRUE_ANSWER,
  NEXT_QUEST,
  CLEAR_QUEST,
} from "../types";
import { SolutionContext } from "./solutionContext";
import { solutionReducer } from "./solutionReducer";

export const SolutionState = ({ children }) => {
  const [state, dispatch] = useReducer(solutionReducer, {
    allquests: null,
    currentQuest: 0,
    modalFalse: false,
    modalTrue: false,
  });

  const addQuest = (item) => {
    dispatch({
      type: ADD_QUEST,
      payload: item,
    });
  };

  const clearQuest = () => {
    dispatch({
      type: CLEAR_QUEST,
    });
  };

  const falseAnswer = (i) => {
    dispatch({
      type: FALSE_ANSWER,
      payload: !state.modalFalse,
    });
  };

  const trueAnswer = (i) => {
    dispatch({
      type: TRUE_ANSWER,
      payload: !state.modalTrue,
    });
  };

  const nextQuest = (i) => {
    dispatch({
      type: NEXT_QUEST,
      payload: ++state.currentQuest,
    });
  };

  return (
    <SolutionContext.Provider
      value={{
        allQuests: state.allquests,
        addQuest,
        currentQuest: state.currentQuest,
        modalFalse: state.modalFalse,
        modalTrue: state.modalTrue,
        falseAnswer,
        trueAnswer,
        nextQuest,
        clearQuest,
      }}
    >
      {children}
    </SolutionContext.Provider>
  );
};
