import { ADD_BOOK } from "../types"

export const bookReduser =(state, action)=> {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...action.book
            }
            default:
                return state
    }
}