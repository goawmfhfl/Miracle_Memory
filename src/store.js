import { combineReducers } from "redux";
import { createStore } from "redux";
import memoryReducer from "./module/memoryReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  memoryReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
