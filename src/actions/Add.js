// import * as uuid from "uuid";
import { toast } from "react-toastify";
export const Add = () => {
  return async function (dispatch, getState) {
    const onEdit = getState().onEdit;
    const acts = getState().activityReducer;
    const text = getState().handleChange;
    if (text.length < 5) {
      toast.warn("5 carachters at least");
    } else if (onEdit[0] === true) {
      const indexc = acts.findIndex((v) => v.id === onEdit[1]);
      acts[indexc].text = text;
      await dispatch({ type: "ON_EDIT", payload: [false, 0] });
      await dispatch({
        type: "INIT",
        payload: [...acts],
      });
      await dispatch({ type: "TEXT", payload: "" });
      toast.info("Changed");
    } else {
      const newAct = {
        id: Math.floor(Math.random() * 1000),
        text,
        done: false,
      };
      await dispatch({
        type: "INIT",
        payload: [...acts, newAct],
      });
      await dispatch({ type: "TEXT", payload: "" });
      toast.success("Added");
    }
  };
};
