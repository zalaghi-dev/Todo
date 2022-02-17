export const Done = (id) => {
  return async function (dispatch, getState) {
    const acts = getState().activityReducer;
    const cIndex = acts.findIndex((v) => v.id === id);
    acts[cIndex].done = !acts[cIndex].done;
    await dispatch({ type: "INIT", payload: [...acts] });
  };
};
