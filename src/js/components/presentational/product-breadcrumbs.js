import React from 'react';

export default class ProductBreadcrumbs extends React.Component {
    render () {
        const { path } = this.props;
        console.log(path)
        return (
            <div className="product-list-breadcrumbs">
                <div className="product-list-breadcrumbs-category">
                </div>
            </div>
        );
    }
}
