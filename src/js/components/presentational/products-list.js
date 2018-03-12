import React from 'react';
import qs from "query-string";

export default class ProductsList extends React.Component {
    componentWillMount() {
        fetch('http://localhost:8081/', {mode: 'no-cors',dataType: 'json'})
          .then((response) => {
            this.setState({ items: response });
          })
    }

    render() {
        const searchTerm = qs.parse(this.props.location.search);
        console.log(this.state);
        return (
            <div>
                <h3>product list search:{searchTerm.search}</h3>
            </div>
        );
    }
}
