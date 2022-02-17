import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
export const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.subscribe(() => {
  localStorage.setItem(
    "save",
    JSON.stringify(store.getState().activityReducer)
  );
});
store.dispatch({
  type: "INIT",
  payload: JSON.parse(localStorage.getItem("save")),
});
