import { combineReducers } from "redux";
import loggedIn from "./loggedIn";
import loginData from "./loginData";

const reducers = combineReducers({
    loggedIn,
    loginData
});
export default reducers;