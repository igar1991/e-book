import { ADD_QUEST } from "../types";

export const solutionReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUEST:
      return {
        ...state,
        allquests: action.payload,
      };
    default:
      return state;
  }
};
