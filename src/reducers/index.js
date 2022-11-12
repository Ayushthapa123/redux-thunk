import todoReducers from "./todoReducers";
import { productReducer } from "./productReducer";

import { combineReducers } from "redux";

const rootReducer=combineReducers({
    todoReducers,
    productReducer
    
})

export default rootReducer;