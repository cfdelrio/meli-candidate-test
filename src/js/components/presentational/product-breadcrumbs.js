import React from 'react';
import { Link } from 'react-router-dom'
import { map } from 'lodash';
import { array_merge } from '../helper/model-helper';

const breadcrumbsSelect = (httpReferer, uri) => {
    if(uri.indexOf(httpReferer) !== -1){
        return '--selected'
    }
    return '';
}

export default class ProductBreadcrumbs extends React.Component {
    render () {
        const { 
            productsList,
            uri 
        } = this.props;

        const categories = map(
            productsList, 
            item => item.categories
        );

        const categoriesFiltered =  array_merge(categories);

        return (
            categoriesFiltered.map(
                category =>
                    <div className={`breadcrumbs-category${breadcrumbsSelect(category, uri)}`}>
                        <Link to={`/items?q=${category}`}>
                            {category}
                        </Link>
                    </div>
            )
        );
    }
}
