import * as types from './types';

export const setNewData = (data) => (dispatch) =>
  dispatch({
    type: types.ADD,
    payload: data,
  });
