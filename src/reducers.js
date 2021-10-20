import { SET_SEARCH_FIELD } from './constants'

/**
 * Current state
 */
const currentState = {
    searchField: ''
}

export const searchRobots = (state=currentState, action={}) => {
    switch (action.type) {
        case SET_SEARCH_FIELD:
            return {...state, searchField: action.payload}
    
        default:
            return state;
    }
}