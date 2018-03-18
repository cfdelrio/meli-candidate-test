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
            urlReferer: props.location.search,
            errorInSearch: false,
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
            addProductFetchedToStore,
        } = this.props;
        
        this.setState({
            errorInSearch: false
        });
        
        const hasError = error => this.setState({
            errorInSearch: true,
        });

        httpRequest(
            endpoint,
            addProductFetchedToStore,
            hasError,
        );
    }

    render() {
        const { productFetched } = this.props;
        const { errorInSearch } = this.state;


        if(isEmpty(productFetched) || errorInSearch) {
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
