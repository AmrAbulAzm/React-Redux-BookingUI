import { createStore, combineReducers } from "redux";

import reducers from "./reducers";

export default function initStore() {
  const store = createStore(combineReducers(reducers));
  return store;
}
