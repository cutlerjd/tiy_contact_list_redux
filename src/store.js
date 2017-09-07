import {createStore} from 'redux'
import contactReducer from './reducers/contactReducer'

let store = createStore(contactReducer)

export default store