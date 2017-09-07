import * as actions from '../actions/contactActionTypes'

let initialState = {
    users: []
}

export default function (state = initialState, payload) {
    switch(payload.type){
        case actions.LOAD_DATA:
        return {...state,users:payload.users}
        default:
         return state
    }
}