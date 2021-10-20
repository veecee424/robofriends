import { SET_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => {
    return {
        type: SET_SEARCH_FIELD,
        payload: text
    }
}
