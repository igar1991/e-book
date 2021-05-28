import {
  ADD_QUEST,
  CLEAR_QUEST,
  FALSE_ANSWER,
  NEXT_QUEST,
  TRUE_ANSWER,
} from "../actionTypes";

const initialState = {
  allquests: [],
  currentQuest: 0,
  modalFalse: false,
  modalTrue: false,
};

export const solutionReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_QUEST:
      return {
        ...state,
        allquests: action.payload,
      };
    case CLEAR_QUEST:
      return {
        ...state,
        currentQuest: 0,
      };
    case FALSE_ANSWER:
      return {
        ...state,
        modalFalse: !state.modalFalse,
      };
    case TRUE_ANSWER:
      return {
        ...state,
        modalTrue: !state.modalTrue,
      };
    case NEXT_QUEST:
      return {
        ...state,
        currentQuest: ++state.currentQuest,
      };
    default:
      return state;
  }
};
