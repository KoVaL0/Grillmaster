import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import sampleData from '@/public/sample-data.json';

const initialState = {
  ...sampleData,
  loading: false,
  bag: [],
  outBag: [],
  statisticOutBag: {},
};

const dataReducer = handleActions({
  SET_NEW_STORE: (state, action) => ({ ...state, ...action.payload.grill }),
  SET_INFO: (state, action) => ({
    ...state, statisticOutBag: action.payload.statisticOutBag,
  }),
  ADD_GRILL_ITEM: (state, action) => ({
    ...state, bag: action.payload.bag, outBag: action.payload.outBag,
  }),
  ITEMS_IS_LOADING: (state, action) => ({ ...state, loading: action.payload.isLoading }),
}, initialState);

const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);
