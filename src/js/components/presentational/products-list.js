import React from 'react';
import qs from "query-string";
import fetch from 'cross-fetch';

const urlEndPoint = 'http://localhost:8081/';

// const searchTerm = qs.parse(this.props.location.search)
export default class ProductsList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            userList: [],
            isLoading: false,
        };
    }
    
    componentDidMount() {
        this.setState({ isLoading: true });
        const searchTerm = qs.parse(this.props.location.search);
        
        fetch(`${urlEndPoint}api/items?q=${searchTerm.q}`, {
            mode: "no-cors",
            method: "GET"
          })
          .then(response => response.json())
          .then(data => this.setState({ userList: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        
        return (
            <div>
                <h3>product list search:</h3>
            </div>
        );
    }
}
