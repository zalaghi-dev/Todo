export const activityReducer = (state = [
    
], action) => {
  switch (action.type) {
    case "INIT":
      return [...action.payload];
    default:
      break;
  }
};
