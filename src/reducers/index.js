import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import { handleChange } from "./handleChange";
export const reducers = combineReducers({ handleChange, activityReducer });
