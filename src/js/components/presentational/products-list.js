import React from 'react';
import fetch from 'cross-fetch';
import { isEmpty, compact, map } from 'lodash';

import ProductBreadcrumbs from './product-breadcrumbs';
import htmlProductTable from './product-table';
import httpRequest from '../helper/api';
import {
    HTTP_ENDPOINT,
    PRODUCTS_NOT_FOUND
} from '../helper/model-helper';

export default class ProductsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            isLoading: false,
            urlReferer: props.location.search
        };
    }

    componentWillMount(){
        const {
            urlReferer
        } = this.state;

        const {
            addErrorToStore, 
            addProductFetchedToStore,
        } = this.props;

        const endpoint = [
            HTTP_ENDPOINT, 
            'api/items',
            urlReferer
        ].join('');

        this.fetchProductList(endpoint);
    }

    componentWillReceiveProps(nextProps){
        const { urlReferer } = this.state;
        const nextUrl = nextProps.location.search;

        if(nextUrl !== urlReferer) {
            const endpoint = [
                HTTP_ENDPOINT,
                'api/items',
                nextUrl
            ].join('');
            
            this.fetchProductList(endpoint);
            this.setState({
                urlReferer: nextUrl
            });
        }
    }
    
    fetchProductList(endpoint){
        const {
            addErrorToStore, 
            addProductFetchedToStore,
        } = this.props;
        
        httpRequest(
            endpoint,
            addProductFetchedToStore,
            addErrorToStore
        );
    }

    render() {
        const { productFetched } = this.props;
        
        if(isEmpty(productFetched)) {
            return <div className="product-not-found">{PRODUCTS_NOT_FOUND}</div>
        };

        return (
            <div>
                <ProductBreadcrumbs
                    path={productFetched}
                />
                <div className="product-list">
                    {
                        compact(productFetched)
                            .map(
                                product => htmlProductTable(product)
                            )
                    }
                </div>
            </div>
        )
    }
}
