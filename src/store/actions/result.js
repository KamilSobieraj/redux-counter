import * as actionTypes from "./actionsTypes";

//Simulating asynchronous code
export const saveResult = result => {
  return { type: actionTypes.STORE_RESULT, result: result };
};
export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const deleteResult = elementID => {
  return { type: actionTypes.DELETE_RESULT, resultElementID: elementID };
};
