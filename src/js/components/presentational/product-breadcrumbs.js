import React from 'react';
import { Link } from 'react-router-dom'
import { map } from 'lodash';
import { array_merge } from '../helper/model-helper';

export default class ProductBreadcrumbs extends React.Component {
    render () {
        const { path } = this.props;

        const categories = map(
            path, 
            item => item.categories
        );

        const categoriesFiltered =  array_merge(categories);

        return (
            categoriesFiltered.map(
                category => 
                    <div className="product-list-breadcrumbs">
                        <div className="product-list-breadcrumbs-category">
                            <Link to={`/items?q=${category}`}>
                                {category}
                            </Link>
                        </div>
                    </div>
            )
        );
    }
}
