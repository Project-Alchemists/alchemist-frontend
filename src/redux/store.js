import { combineReducers, createStore } from "redux";
import web3Reducer from "./reducer";

const combinedReducers = combineReducers({
  globalState: web3Reducer,
});

export const store = createStore(combinedReducers);
