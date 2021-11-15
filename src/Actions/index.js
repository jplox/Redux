/**
 * Actions: Actions are a plain JavaScript object that contains information. Actions are the only source of information for the store. Actions have a type field that tells what kind of action to perform and all other fields contain information or data.
 * @returns
 */

/**
 * @description: Increment function increments the value
 * @returns
 */
const IncNum = () => {
  return {
    type: "INCREMENT",
  };
};

/**
 * @description: Decrement function decrement the values
 * @returns
 */
const DecNum = () => {
  return {
    type: "DECREMENT",
  };
};

/**
 * @description IncrementByAmount function increment the number by certain user defined value
 * @param {number} num
 * @returns
 */
const IncrementByAmount = (num) => {
  return {
    type: "IncrementByAmount",
    payload: num,
  };
};
export { IncNum, DecNum, IncrementByAmount };
