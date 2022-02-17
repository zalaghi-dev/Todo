import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import { handleChange } from "./handleChange";
import { onEdit } from "./onEdit";
export const reducers = combineReducers({
  handleChange,
  activityReducer,
  onEdit,
});
