import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import sampleData from '../public/sample-data.json';

const dataReducer = handleActions({
  SET_NEW_DATA: (state, action) => ({ ...action.payload }),
  ADD_CALC_RESULT: (state, action) => ({
    ...state, Bag: action.payload.Bag, outBag: action.payload.outBag,
  }),
  ITEMS_IS_LOADING: (state, action) => ({ ...state, loading: action.payload.bool }),
}, sampleData);

const reducers = {
  data: dataReducer,
};

export default combineReducers(reducers);

// const dataReducer = (state = sampleData, { type, payload }) => {
//   switch (type) {
//     case types.ADD_INITIAL_STATE:
//       return payload;
//     case types.ADD_CALC_RESULT:
//       return { ...state, Bag: payload.Bag, outBag: payload.outBag };
//     case types.ITEMS_IS_LOADING:
//       return { ...state, loading: payload };
//     default:
//       return state;
//   }
// };
