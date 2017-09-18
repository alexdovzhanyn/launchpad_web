import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import launchpad from './reducers/root-reducer';

let store = createStore(launchpad);

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('app')
);