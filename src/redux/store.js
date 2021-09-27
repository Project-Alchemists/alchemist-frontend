import { combineReducers, createStore } from "redux";
import tokenReducer from "./reducer";

const combinedReducers = combineReducers({
  tokenBalance: tokenReducer,
});

export const store = createStore(combinedReducers);
