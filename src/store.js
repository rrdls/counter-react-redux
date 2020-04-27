import { createStore } from "redux";
import { combineReducers } from "redux";

//REDUCERS
const initialState = {
  count: 0
};
const contadorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  contador: contadorReducer
});

//STORE
export const store = createStore(Reducers);
