export const bookReduser =(state, action)=> {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...action.payload
            }
            default:
                return state
    }
}