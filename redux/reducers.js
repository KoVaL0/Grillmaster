import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import sampleData from '@public/sample-data.json';

const dataReducer = handleActions({
  SET_NEW_DATA: (state, action) => (action.payload),
  ADD_CALC_RESULT: (state, action) => ({
    ...state, Bag: action.payload.Bag, outBag: action.payload.outBag,
  }),
  ITEMS_IS_LOADING: (state, action) => ({ ...state, loading: action.payload }),
}, sampleData);

const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);
