import React from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";

//ACTION
function IncrementAction() {
  return {
    type: "INCREMENT"
  };
}

//Contador Component
export default function Contador() {
  const dispatch = useDispatch(); //Dispara a action
  const value = useSelector(state => state.contador.count); //Pega os dados do store

  function Increment() {
    dispatch(IncrementAction());
  }
  return (
    <div className="Contador">
      <h1>{value}</h1>
      <button onClick={Increment}>Ok</button>
    </div>
  );
}
