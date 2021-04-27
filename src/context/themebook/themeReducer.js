import { ADD_THEME } from "../types";

export const themeReducer =(state, action)=>{
    switch (action.type) {
        case ADD_THEME:
            return {
                ...action.payload
            }

            default:
                return state

    }
}