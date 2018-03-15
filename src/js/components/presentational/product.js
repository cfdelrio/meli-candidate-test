import React from 'react';
import fetch from 'cross-fetch';
import qs from "query-string";
import { compact, get, head } from 'lodash';
import ProductImage from './product-image';
import ProductPrice from './product-price';

const urlEndPoint = 'http://localhost:8081/';

export default class Product extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            productFetched: {},
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
          .then(data => {
            this.setState({ productFetched: data[0], isLoading: false });
          })
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { productFetched } = this.state;
        return (
            <div className="product-container">
                <div className="product-image">
                    <ProductImage
                        image={productFetched.picture}
                    />
                </div>
                <div className="product-information">
                    <div className="product-title">
                        {productFetched.title}
                    </div>
                    <ProductPrice
                        productFetched={productFetched}
                    />
                </div>
            </div>
        );
    }
}
