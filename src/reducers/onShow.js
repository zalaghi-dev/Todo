export const onShow = (state = false, { type, payload }) => {
  switch (type) {
    case "ON_SHOW":
      return !state;

    default:
      return state;
  }
};
