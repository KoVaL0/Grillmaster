import * as types from './types';

export const setNewData = (data) => (dispatch) => dispatch({
  type: types.ADD,
  payload: data,
});

export const addOutBag = (data) => (dispatch) => dispatch({
  type: types.ADDOUTBAG,
  payload: data,
});
