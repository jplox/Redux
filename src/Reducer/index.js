/**
 * This is kind of root reducer where all of our multiple reducer functions are stored
 */

import ChangeNum from "./IncDec";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ChangeNum, 
})

export default  rootReducer;