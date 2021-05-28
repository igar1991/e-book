import {
  ADD_START_DATA,
  OPEN_MODAL_NAME,
  ADD_ALL_RESULT,
} from "../actionTypes";

const initialState = {
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
  allResult: null,
};

export const resultReducer = (state = initialState, { payload, type }) => {
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
    case ADD_ALL_RESULT:
      return {
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
        allResult: [
          ...state.allResult,
          {
            titleBook: state.titleBook,
            titleClass: state.titleClass,
            nameStudent: state.nameStudent,
            numberClas: state.numberClass,
            date: state.date,
            solvet: state.solvet,
            error: state.error,
            miss: state.miss,
            res: state.res,
            modalName: false,
          },
        ],
      };
    default:
      return state;
  }
};
