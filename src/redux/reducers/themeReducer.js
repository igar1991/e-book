import { ADD_THEME, CLEAR_THEME } from "../actionTypes";

const initialState =null

export const themeReducer =(state=initialState, action)=>{
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