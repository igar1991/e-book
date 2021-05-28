import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { resultReducer } from "./resultReducer";
import { solutionReducer } from "./solutionReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({ bookReducer, resultReducer, solutionReducer, themeReducer });
