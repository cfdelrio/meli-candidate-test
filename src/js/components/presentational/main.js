import React from "react";
import Header from './header';
import { Switch, Route } from 'react-router-dom'
import { debug } from "util";

const Main = () => {
  debug;
  return (
  <main>
    <Switch>
      <Route path='/' component={Header}/>
    </Switch>
  </main>
)};

export default Main;