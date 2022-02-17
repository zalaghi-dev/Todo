import { toast } from "react-toastify";
export const Delete = (id) => {
  return async function (dispatch, getState) {
    const acts = getState().activityReducer;
    const filtered=acts.filter((v) => v.id !== id);
    await dispatch({ type: "INIT", payload: [...filtered] });
    toast.error("Deleted")
  };
};
