export const activityReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
    case "ERASE":
      return [];
    default:
      return state;
  }
};
