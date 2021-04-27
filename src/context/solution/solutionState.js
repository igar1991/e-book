import React, { useReducer } from "react";
import { ADD_QUEST } from "../types";
import { SolutionContext } from "./solutionContext";
import { solutionReducer } from "./solutionReducer";

export const SolutionState = ({ children }) => {
  const [state, dispatch] = useReducer(solutionReducer, {
    allquests: null,
    currentQuest: 1,
    solut: false,
  });

  const addQuest = (item) => {
    dispatch({
      type: ADD_QUEST,
      payload: item,
    });
  };

  return (
    <SolutionContext.Provider
      value={{
        allQuests: state.allquests,
        addQuest,
        current: state.currentQuest,
      }}
    >
      {children}
    </SolutionContext.Provider>
  );
};
