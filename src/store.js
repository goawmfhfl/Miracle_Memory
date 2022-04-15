import { combineReducers } from "redux";
import { createStore } from "redux";
import memoryReducer from "./module/memoryReducer";
import todoListReducer from "./module/todoListReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  memoryReducer,
  todoListReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
