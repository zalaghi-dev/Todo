export const handleChange = (state = "", action) => {
  switch (action.type) {
    case "TEXT":
      return action.payload;
    default:
      return state;
  }
};
