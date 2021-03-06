import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import thunkMiddleWare from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { stateReducer } from "./store/state";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  stateReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleWare))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
