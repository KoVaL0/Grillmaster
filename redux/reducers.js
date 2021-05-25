import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import sampleData from '@public/sample-data.json';

const initialState = {
  ...sampleData,
  loading: false,
};

const dataReducer = handleActions({
  SET_NEW_STORE: (state, action) => (action.payload),
  SET_INFO: (state, action) => ({ ...state, info: action.payload }),
  ADD_CALC_RESULT: (state, action) => ({
    ...state, bag: action.payload.bag, outBag: action.payload.outBag,
  }),
  ITEMS_IS_LOADING: (state, action) => ({ ...state, loading: action.payload }),
}, initialState);

const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);
