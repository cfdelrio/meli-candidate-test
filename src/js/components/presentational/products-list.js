import React from 'react';
import qs from "query-string";
import fetch from 'cross-fetch';

import { isEmpty, compact, get, isArray, map, each } from 'lodash';
import ProductBreadcrumbs from './product-breadcrumbs';
import htmlProductTable from './product-table';
import parser from '../helper/model-helper';

const urlEndPoint = 'http://localhost:8081/';

export default class ProductsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            productsList: [],
            isLoading: false,
        };

    }
    
    componentWillReceiveProps(){
        this.setState({ isLoading: true });
        const { searchTerm } = this.props;

        fetch(`${urlEndPoint}api/items?q=${searchTerm}`, {
            mode: "no-cors",
            method: "GET"
          })
          .then(response => response.json())
          .then(data => this.setState({ productsList: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });
        const searchTermFromUri = qs.parse(this.props.location.search);

        const { searchTerm } = this.props;
        const queryString = searchTerm || searchTermFromUri.q;
                
        fetch(`${urlEndPoint}api/items?q=${queryString}`, {
            mode: "no-cors",
            method: "GET"
          })
          .then(response => response.json())
          .then(data => this.setState({ productsList: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { productsList } = this.state;

        if(isEmpty(compact(productsList))) {
            return <div className="product-not-found">Products not found</div>
        }

        const productTable = parser(productsList);

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
