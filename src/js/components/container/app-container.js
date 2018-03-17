import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import Main from '../presentational/main';
import rootReducer from '../reducers/root-reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('sssss', store.getState()));
// store.subscribe(rootReducer);

const App = () => (
  <div>
    <Main/>
  </div>
)

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, wrapper) : false;


