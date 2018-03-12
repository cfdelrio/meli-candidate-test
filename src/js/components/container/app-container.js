import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from '../presentational/main';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
  <div>
    <Main />
  </div>
)

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
   <App />
, wrapper) : false;
