import React, { useReducer } from "react";
import { ADD_BOOK } from "../types";
import { BookContext } from "./bookContext";
import { bookReduser } from "./bookReducer";

export const BookState = ({ children }) => {
  const [state, dispatch] = useReducer(bookReduser);

  const addBook = (item) => {
    dispatch({
      type: ADD_BOOK,
      book: item,
    });
  };

  return (
    <BookContext.Provider
      value={{
        addBook,
        book: state,
        
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
