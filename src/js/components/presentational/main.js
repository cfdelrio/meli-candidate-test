import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './header';
import ProductsListContainer from '../container/product-list-container';
import ProductContainer from '../container/product-container';

const Main = () => (
  <Router>
    <div className="content">
      <Route path="/" component={Header} />
      <Route exact path="/items" component={ProductsListContainer} />
      <Route exact path="/items/:id" component={ProductContainer}  />
    </div>
  </Router>
); 

export default Main;
