const intialstate = 0;
/**
 * @description:This function is one of the reducer function which contain increment and decrement and IncrementByAmount case and each case performs certain actions.
 * @param {number} state
 * @param {string} action
 * @returns
 */
const ChangeNum = (state = intialstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      if (state <= 0) {
        alert("Negatives are not allowed");
        return (state = 0);
      } else {
        return state - 1;
      }
    case "IncrementByAmount":
      return state + action.payload;

    default:
      return state;
  }
};
export default ChangeNum;
