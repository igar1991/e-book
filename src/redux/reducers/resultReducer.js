import {
  ADD_START_DATA,
  OPEN_MODAL_NAME,
  ADD_ALL_RESULT,
  SOLVET,
  ERROR,
  MISS,
} from "../actionTypes";

const initialState = {
  titleBook: "",
  titleClass: "",
  nameStudent: "",
  numberClass: "",
  date: "",
  solvet: 0,
  error: 0,
  miss: 0,
  res: "Хороший результат!",
  modalName: false,
  allResult: [],
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
    case SOLVET:
      return {
        ...state,
        solvet: ++state.solvet
      };
    case ERROR:
      return {
        ...state,
        error: ++state.error
      };
    case MISS:
      return {
        ...state,
        miss: ++state.miss
      };
    case ADD_ALL_RESULT:
      return {
        titleBook: "",
        titleClass: "",
        nameStudent: "",
        numberClass: "",
        date: "",
        solvet: 0,
        error: 0,
        miss: 0,
        res: "Хороший результат!",
        modalName: false,
        allResult: [
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
          ...state.allResult,

        ],
      };
    default:
      return state;
  }
};
