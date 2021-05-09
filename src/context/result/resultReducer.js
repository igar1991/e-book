import { ADD_START_DATA } from "../types"

export const resultReducer =(state, action)=>{
    switch(action.type) {
        case ADD_START_DATA:
            return {
                ...state, modalName: false
            }
        default:
            return state
    }
}