import React from 'react';
import qs from "query-string";

export default class ProductsList extends React.Component {
    render() {
        const searchTerm = qs.parse(this.props.location.search);
        
        return (
            <div>
                <h3>product list search:{searchTerm.search}</h3>
            </div>
        );
    }
}
