import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default function useStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
