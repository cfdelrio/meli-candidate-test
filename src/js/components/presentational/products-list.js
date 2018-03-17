import React from 'react';
import qs from "query-string";
import fetch from 'cross-fetch';

import { isEmpty, compact, get, isArray, map, each } from 'lodash';
import ProductBreadcrumbs from './product-breadcrumbs';
import htmlProductTable from './product-table';
import parser from '../helper/model-helper';
import httpRequest from '../helper/api';

const urlEndPoint = 'http://localhost:8081/';

export default class ProductsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            productsList: [],
            isLoading: false,
        };

    }
    
    componentDidMount() {
        const { searchTerm } = this.props;
        const searchTermFromUri = qs.parse(this.props.location.search);
        const queryString = searchTerm || searchTermFromUri.q
        const endpoint = `${urlEndPoint}api/items?q=${queryString}`;

        const {
            addErrorToStore, 
            addProductFetchedToStore,
        } = this.props;
   
        httpRequest(endpoint, addProductFetchedToStore, addErrorToStore);
    }

    render() {
        const { productFetched } = this.props;

        if(isEmpty(compact(productFetched))) {
            return <div className="product-not-found">Products not found</div>
        }

        const productTable = parser(productFetched);

        return (
            <div>
                <ProductBreadcrumbs
                    path={productTable}
                />
                <div className="product-list">
                    {
                        compact(productTable).map(
                            product => htmlProductTable(product)
                        )
                    }
                </div>
            </div>
        )
    }
}
