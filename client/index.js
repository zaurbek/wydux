import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createDevTools } from 'redux-devtools';
import thunk from 'redux-thunk';

import reducer from './rootReducer.js';
import { OuterApp } from './Components/index.js';

const store = createStore(reducer, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

ReactDOM.render(
  <Provider store={store}>
      <OuterApp/>
  </Provider>, document.getElementById('root'));
