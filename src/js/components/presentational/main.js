import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';
import ProductsList from './products-list';
import Product from './product';

const Main = store => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/items" component={ProductsList} />
      <Route path="/items/:id" component={Product}  />
    </div>
  </Router>
); 

export default Main;
