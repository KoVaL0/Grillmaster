import { Provider } from 'react-redux';
import React from 'react';
import useStore from '@/redux/store';

import '@/i18n';
import '@/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component pageProps={pageProps} />
    </Provider>
  );
}
