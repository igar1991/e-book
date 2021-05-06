import { ADD_THEME, CLEAR_THEME } from "../types";

export const themeReducer =(state, action)=>{
    switch (action.type) {
        case ADD_THEME:
            return {
                ...action.payload
            }
            case CLEAR_THEME:
                return false

            default:
                return state

    }
}