import {
  ADD_QUEST,
  CLEAR_QUEST,
  FALSE_ANSWER,
  NEXT_QUEST,
  TRUE_ANSWER,
} from "../types";

export const solutionReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUEST:
      return {
        ...state,
        allquests: action.payload,
      };
    case CLEAR_QUEST:
      return {
        ...state,
        currentQuest: 0
      };
    case FALSE_ANSWER:
      return {
        ...state,
        modalFalse: action.payload,
      };
    case TRUE_ANSWER:
      return {
        ...state,
        modalTrue: action.payload,
      };
    case NEXT_QUEST:
      return {
        ...state,
        currentQuest: action.payload,
      };
    default:
      return state;
  }
};
