import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from '../presentational/home';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seo_title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;