import * as actionStypes from "./actionsTypes";

export const increment = () => {
  return { type: actionStypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionStypes.DECREMENT };
};
export const add = value => {
  return { type: actionStypes.ADD, value: value };
};
export const substract = value => {
  return { type: actionStypes.SUBSTRACT, value: value };
};
