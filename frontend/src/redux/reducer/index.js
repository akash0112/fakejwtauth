import { combineReducers } from "redux";
import authReducer from "./auth";
const Rootreducer=combineReducers({auth:authReducer})
export default Rootreducer