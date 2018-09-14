import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes/routes';
import store from '../stores/rootStore';

export default function App(props) {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}