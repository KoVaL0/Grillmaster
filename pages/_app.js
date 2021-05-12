import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import useStore from '../redux/store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component pageProps={pageProps} />
    </Provider>
  );
}
