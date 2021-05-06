import { combineReducers } from 'redux';
import * as types from './types';
import sampleData from '../public/sample-data.json';

const dataReducer = (state = sampleData, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);
