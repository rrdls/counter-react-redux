import React from "react";
import "./styles.css";
import Contador from "./Contador.js";
import { Provider } from "react-redux";

import { store } from "./store.js";
export default function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Contador />
      </div>
    </Provider>
  );
}
