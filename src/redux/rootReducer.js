import { combineReducers } from "redux";
// import AuthSlice from './auth/authReducer';
import NameSlice from './auth/authReducer'

const RootReducer=combineReducers({
    NameSlice,
})

export default RootReducer;