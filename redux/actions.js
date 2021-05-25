import { createActions } from 'redux-actions';
import { toast } from 'react-toastify';

export const {
  setNewStore, setInfo, itemsIsLoading, addCalcResult,
} = createActions({
  SET_NEW_STORE: (data) => data,
  SET_INFO: (data) => data,
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
    let countOutBag = 0;
    data.outBag.forEach((item) => { countOutBag += item.count; });
    dispatch(addCalcResult(data));
    dispatch(setInfo({ countOutBag }));
    dispatch(itemsIsLoading(false));
    toast.success((`Success! ${data.date}ms`));
  } catch (e) {
    toast.error('Error fetch');
    dispatch(itemsIsLoading(false));
  }
};
