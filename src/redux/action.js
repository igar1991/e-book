import {
  ADD_BOOK,
  ADD_START_DATA,
  OPEN_MODAL_NAME,
  ADD_ALL_RESULT,
  ADD_QUEST,
  CLEAR_QUEST,
  FALSE_ANSWER,
  TRUE_ANSWER,
  NEXT_QUEST,
  ADD_THEME,
  CLEAR_THEME,
  SOLVET,
  ERROR,
  MISS
} from "./actionTypes";

export const addBook = (item) => ({
  type: ADD_BOOK,
  payload: item,
});

export const addStartdata = (
  nameStudent,
  numberClass,
  titleBook,
  titleClass
) => {
  const dateNow = new Date().toLocaleDateString();
  return {
    type: ADD_START_DATA,
    payload: { nameStudent, numberClass, titleBook, titleClass, dateNow },
  };
};

export const openModalName = () => ({
  type: OPEN_MODAL_NAME,
});

export const addAllResult = () => ({
  type: ADD_ALL_RESULT,
});

export const addQuest = (item) => ({
  type: ADD_QUEST,
  payload: item,
});

export const clearQuest = () => ({
  type: CLEAR_QUEST,
});

export const falseAnswer = () => ({
  type: FALSE_ANSWER,
});

export const trueAnswer = () => ({
  type: TRUE_ANSWER,
});

export const nextQuest = () => ({
  type: NEXT_QUEST,
});

export const addTheme=(item)=>({
        type: ADD_THEME,
        payload: item
    })

export const clearTheme =()=> ({
    type: CLEAR_THEME
  })
export const addSolvet =()=>({
  type: SOLVET
})
export const addError =()=>({
  type: ERROR
})
export const addMiss =()=>({
  type: MISS
})
