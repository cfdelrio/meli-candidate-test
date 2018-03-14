import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';
import ProductsListContainer from '../container/product-list-container';
import Product from './product';

const Main = () => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/items" component={ProductsListContainer} />
      <Route path="/items/:id" component={Product}  />
    </div>
  </Router>
); 

export default Main;
