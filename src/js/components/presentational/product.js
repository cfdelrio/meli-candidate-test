import React from 'react';

export default class Product extends React.Component {
    render() {
        const productId = this.props.match.params.id;
        return (
            <div>
                <h3>product:{productId}</h3>
            </div>
        );
    }
}
