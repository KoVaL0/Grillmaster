import { createActions } from 'redux-actions';
import { toast } from 'react-toastify';

export const { setNewData, itemsIsLoading, addCalcResult } = createActions({
  SET_NEW_DATA: (data) => data,
  ITEMS_IS_LOADING: (bool) => bool,
  ADD_CALC_RESULT: (data) => ({ ...data }),
});

export const placingItems = (url, payload) => async (dispatch) => {
  try {
    dispatch(itemsIsLoading(true));
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    dispatch(addCalcResult(data));
    dispatch(itemsIsLoading(false));
    toast.success(('Success!'));
  } catch (e) {
    toast.error('Error fetch');
  }
};
