// import * as uuid from "uuid";

export const Add = () => {
  return async function (dispatch, getState) {
    const text = getState().handleChange;
    const newAct = { id: Math.floor(Math.random() * 1000), text, done: false };
    await dispatch({
      type: "INIT",
      payload: [...getState().activityReducer, newAct],
    });
    await dispatch({ type: "TEXT", payload: "" });
  };
};
