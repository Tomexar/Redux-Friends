import { combineReducers } from "redux";
import friendReducer from './friendReducer'
import loginReducer from './loginReducer'

export default combineReducers({
    friendReducer,
    loginReducer
})
