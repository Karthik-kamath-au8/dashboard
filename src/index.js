import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './redux/reducer/reducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </Provider>,
  document.getElementById("root")
);
