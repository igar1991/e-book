import { ADD_START_DATA, OPEN_MODAL_NAME } from "../types";

export const resultReducer = (state, { payload, type }) => {
  switch (type) {
    case ADD_START_DATA:
      return {
        ...state,
        modalName: false,
        nameStudent: payload.nameStudent,
        numberClass: payload.numberClass,
        titleBook: payload.titleBook,
        titleClass: payload.titleClass,
        date: payload.dateNow,
      };
    case OPEN_MODAL_NAME:
      return {
        ...state,
        modalName: true,
      };
    default:
      return state;
  }
};
