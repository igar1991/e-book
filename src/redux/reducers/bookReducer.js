import { ADD_BOOK } from "../actionTypes"

const initialState = null

export const bookReducer =(state = initialState, action)=> {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...action.payload
            }
            default:
                return state
    }
}