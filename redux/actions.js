import axios from 'axios';
import { createActions } from 'redux-actions';
import { toast } from 'react-toastify';
import i18next from 'i18next';

export const {
  setNewStore, setInfo, itemsIsLoading, addGrillItem,
} = createActions({
  SET_NEW_STORE: (grill) => ({ grill }),
  SET_INFO: (informationOfGrillItems) => ({ informationOfGrillItems }),
  ITEMS_IS_LOADING: (isLoading) => ({ isLoading }),
  ADD_GRILL_ITEM: ({ bag, outBag }) => ({ bag, outBag }),
});

export const placingItems = (url, payload) => async (dispatch) => {
  try {
    dispatch(itemsIsLoading(true));

    const { data } = await axios.post(url, { payload });

    const countOutBag = data.outBag.reduce((sum, item) => sum + item.count, 0);

    dispatch(addGrillItem(data));
    dispatch(setInfo({ countOutBag }));

    toast.success(i18next.t('common.toast.submit.success', { date: data.date }));
  } catch (e) {
    toast.error(i18next.t(e.response.data.message));
  } finally {
    dispatch(itemsIsLoading(false));
  }
};
