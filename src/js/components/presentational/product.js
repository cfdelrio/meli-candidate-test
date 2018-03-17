import React from 'react';
import fetch from 'cross-fetch';
import qs from "query-string";

import { compact, get, head , isEmpty} from 'lodash';
import ProductImage from './product-image';
import ProductPrice from './product-price';

const urlEndPoint = 'http://localhost:8081/';

export default class Product extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const productId = this.props.match.params.id;
        const { addProductToStore } = this.props;

        fetch(`${urlEndPoint}api/items/${productId}`, {
            mode: "no-cors",
            method: "GET"
          })
          .then(response => {
              console.log(response);
             return response.json()
          })
          .then(data => {
            //this.setState({ productFetched: data, isLoading: false });
            addProductToStore('xxxxx');
          })
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { productFetched } = this.props;
       // console.log(this)

        if(isEmpty(productFetched)){
            return (<div>producto no encontrado</div>);
        }
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
