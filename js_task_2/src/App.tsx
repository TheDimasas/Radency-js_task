import React from 'react';
import { Provider } from 'react-redux';

import './styles.css';

import store from './core/store';
import MainView from './views/MainView';

export default function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  );
}
