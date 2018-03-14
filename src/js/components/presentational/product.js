import React from 'react';
import fetch from 'cross-fetch';
import qs from "query-string";
import { first } from 'lodash';
const urlEndPoint = 'http://localhost:8081/';

export default class Product extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            product: {},
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const productId = this.props.match.params.id;
        
        fetch(`${urlEndPoint}api/items/${productId}`, {
            mode: "no-cors",
            method: "GET"
          })
          .then(response => response.json())
          .then(data => this.setState({ product: first(data), isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { product } = this.state;
        return (
            <div>
                <h3>{product.title}</h3>
            </div>
        );
    }
}
