import { combineReducers } from "redux";
import { createStore } from "redux";
import memoryReducer from "./module/memoryReducer";
import monthDateReducer from "./module/monthDataReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  memoryReducer,
  monthDateReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
