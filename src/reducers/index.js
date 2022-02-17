import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import { handleChange } from "./handleChange";
import { onEdit } from "./onEdit";
import { onShow } from "./onShow";
export const reducers = combineReducers({
  handleChange,
  activityReducer,
  onEdit,
  onShow,
});
