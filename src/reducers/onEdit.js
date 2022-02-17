export const onEdit = (state = [false, 0], { type, payload }) => {
  switch (type) {
    case "ON_EDIT":
      return [...payload];

    default:
      return state;
  }
};
