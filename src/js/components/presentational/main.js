import React from "react";
import Header from './header';
import ProductsList from './products-list';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/items" component={ProductsList} />
      <Route path="/items/:id" component={Product}  />
    </div>
  </Router>
); 

const Product = ({ match }) => (
  <div>
    <h3>Product id: {match.params.id}</h3>
  </div>
);

export default Main;