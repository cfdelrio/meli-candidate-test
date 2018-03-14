import React from 'react';
import qs from "query-string";
import fetch from 'cross-fetch';
import { Link } from 'react-router-dom'
import { isEmpty, compact, first, isArray } from 'lodash';

const urlEndPoint = 'http://localhost:8081/';

const renderProductsList = products => {
    products.map(
        htmlProductTable(product)
    );
}

const htmlProductTable = products => <div>
    <h3>product list</h3>
    {products.map( product => {
        const productLink = ['/items/', product.id].join('');

        return (
        <div>
            <div>
                <Link 
                    to={productLink}
                >
                    {product.title}
                </Link>
            </div>
            <div>{product.condition}</div>
        </div>
        )
    }
    )}
</div>

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
        
        console.log(queryString, 'did');
        
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
            return <div>Products not found</div>
        }
        console.log(compact(productsList));

        return <h1>hay cosas</h1>
    }
}
