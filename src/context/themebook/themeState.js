import React, { useReducer } from "react";
import { ADD_THEME, CLEAR_THEME } from "../types";
import { ThemeContext } from "./themeContext";
import { themeReducer } from "./themeReducer";

export const ThemeState = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer);

  const addTheme=(item)=>{
      dispatch({
          type: ADD_THEME,
          payload: item
      })
  }

  const clearTheme =()=> {
    dispatch({
      type: CLEAR_THEME
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: state,
        addTheme,
        clearTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
