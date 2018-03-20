import React from 'react';
import fetch from 'cross-fetch';
import qs from "query-string";

import { compact, get, head , isEmpty} from 'lodash';
import ProductImage from './product-image';
import ProductPrice from './product-price';
import httpRequest from '../helper/api';
import ProductBreadcrumbs from './product-breadcrumbs';

import {
    HTTP_ENDPOINT,
    PRODUCT_NOT_FOUND
} from '../helper/model-helper';

const SOLD = "234 Vendidos";
const BUTTON_BUY = "Comprar";
const DESCRIPTION_TITLE = "Descripción de producto";

export default class Product extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            urlReferer: props.location.search,            
        };
        this.getProduct();
    }

    getProduct() {
        const productId = this.props.match.params.id;

        const {
            addErrorToStore, 
            addProduct,
        } = this.props;

        const endpoint = [
            HTTP_ENDPOINT, 
            'api/items/',
            productId
        ].join('');

        this.fetchProduct(endpoint);
    }

    fetchProduct(endpoint){
        const {
            addErrorToStore, 
            addProduct,
        } = this.props;

        const addProductToState = product => 
            this.setState({ 
                product: head(compact(product))
            });
        
        httpRequest(
            endpoint,
            addProductToState,
            addErrorToStore
        );
    }

    render() {
        const { product, urlReferer } = this.state;

        if(isEmpty(product)){
            return (<div>{PRODUCT_NOT_FOUND}</div>);
        }
        return (
            <div>
                <div className="product-breadcrumbs">                
                    <div className="product-breadcrumbs-category">
                        <ProductBreadcrumbs
                            productsList={[product]}
                            uri= {urlReferer}
                        />
                    </div>
                </div>
                <div className="product-container">
                    <div className="product-card">
                        <div className="product-image-container">
                            <ProductImage
                                className="product-big-image"
                                image={product.bugPicture}
                            />
                        </div>
                        <div className="product-information">
                            <div className="product-condition">
                                {product.condition} {SOLD}
                            </div>
                            <div className="product-title">
                                {product.title}
                            </div>
                                <ProductPrice 
                                    {...product}
                                />
                                <div className="product-buy">
                                    <input type="button"  value={BUTTON_BUY}/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="product-description-card">
                            <div className="product-description-title">{DESCRIPTION_TITLE}</div>
                            <div className="product-description-text" >{product.description}</div>
                        </div>
                    </div>
            </div>
        );
    }
}
