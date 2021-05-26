import axios from 'axios';
import { createActions } from 'redux-actions';
import { toast } from 'react-toastify';

export const {
  setNewStore, setInfo, itemsIsLoading, addCalcResult,
} = createActions({
  SET_NEW_STORE: (grill) => ({ grill }),
  SET_INFO: (info) => ({ info }),
  ITEMS_IS_LOADING: (isLoading) => ({ isLoading }),
  ADD_CALC_RESULT: ({ bag, outBag }) => ({ bag, outBag }),
});

export const placingItems = (url, payload) => async (dispatch) => {
  try {
    dispatch(itemsIsLoading(true));

    const { data } = await axios.post(url, { payload });

    const countOutBag = data.outBag.reduce((sum, item) => sum + item.count, 0);

    dispatch(addCalcResult(data));
    dispatch(setInfo({ countOutBag }));

    toast.success((`Success! ${data.date}ms`));
  } catch (e) {
    toast.error('Error fetch');
  } finally {
    dispatch(itemsIsLoading(false));
  }
};
