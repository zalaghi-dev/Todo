// import * as uuid from "uuid";

export const Add = () => {
  return async function (dispatch, getState) {
    const onEdit = getState().onEdit;
    const acts = getState().activityReducer;
    const text = getState().handleChange;
    if (onEdit[0] === true) {
      const indexc = acts.findIndex((v) => v.id === onEdit[1]);
      acts[indexc].text = text;
      await dispatch({ type: "ON_EDIT", payload: [false, 0] });
      await dispatch({
        type: "INIT",
        payload: [...acts],
      });
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
    }
    await dispatch({ type: "TEXT", payload: "" });
  };
};
