import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import rootReducer from "./module/store";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const memoryFromLocalStorage = localStorage.getItem("memory")
  ? JSON.parse("memory")
  : null;

const initialState = {
  memory: memoryFromLocalStorage,
};
const store = createStore(rootReducer, initialState, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
