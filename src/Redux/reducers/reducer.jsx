import { USERS } from "../actions/action"

const initialState={
    prod:[]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USERS:
            return {
                ...state,
                prod: action.payload
            }
 
        default:
            return state
    }
}