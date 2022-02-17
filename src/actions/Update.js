export const Update = (id) => {
  return async function (dispatch, getState) {
    const acts = getState().activityReducer;
    const indexc = acts.findIndex((v) => v.id === id);
    await dispatch({ type: "TEXT", payload: acts[indexc].text });
    await dispatch({ type: "ON_EDIT", payload: [true, id] });
  };
};
