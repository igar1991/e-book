import React, { useReducer } from "react";
import { ADD_THEME } from "../types";
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

  return (
    <ThemeContext.Provider
      value={{
        theme: state,
        addTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
