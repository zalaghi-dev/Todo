export const handleChange = (payload) => {
  return async function (dispatch) {
   await dispatch({ type: "TEXT", payload });
  };
};
