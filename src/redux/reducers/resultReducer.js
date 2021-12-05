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
  miss: {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},
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
        miss: {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},
      };
    case ERROR:
      return {
        ...state,
        error: ++state.error
      };
    case MISS:
      let arr = state.miss
      arr[payload] = ++arr[payload]
      return {
        ...state,
        miss: {...arr} 
      };
    case ADD_ALL_RESULT:
      return {
        titleBook: "",
        titleClass: "",
        nameStudent: "",
        numberClass: "",
        date: "",
        miss: {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0},
        modalName: false,
        allResult: [
          {
            titleBook: state.titleBook,
            titleClass: state.titleClass,
            nameStudent: state.nameStudent,
            numberClas: state.numberClass,
            date: state.date,
            miss: state.miss,
            modalName: false,
          },
          ...state.allResult,

        ],
      };
    default:
      return state;
  }
};
