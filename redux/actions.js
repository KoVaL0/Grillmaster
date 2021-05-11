import { createActions } from 'redux-actions';

export const { setNewData, itemsIsLoading, addCalcResult } = createActions({
  SET_NEW_DATA: (data) => ({ ...data }),
  ITEMS_IS_LOADING: (bool) => ({ bool }),
  ADD_CALC_RESULT: (Bag, outBag) => ({ Bag, outBag }),
});

export const placingItems = (url, data) => (dispatch) => {
  dispatch(itemsIsLoading(true));

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(({ Bag, outBag }) => {
      dispatch(addCalcResult(Bag, outBag));
      dispatch(itemsIsLoading(false));
    });
};

// export const placingItems = (url, data) => (dispatch) => {
//   dispatch(itemsIsLoading(true));
//
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then(({ Bag, outBag }) => {
//       dispatch(addCalcResult(Bag, outBag));
//       dispatch(itemsIsLoading(false));
//     });
// };

// export const setNewData = (data) => (dispatch) => dispatch({
//   type: types.ADD_INITIAL_STATE,
//   payload: data,
// });
//
// export const itemsIsLoading = (bool) => (dispatch) => dispatch({
//   type: types.ITEMS_IS_LOADING,
//   payload: bool,
// });
//
// export const addCalcResult = (Bag, outBag) => (dispatch) => dispatch({
//   type: types.ADD_CALC_RESULT,
//   payload: { Bag, outBag },
// });
