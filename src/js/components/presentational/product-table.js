import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './product-image'
import ProductPrice from './product-price';

const htmlProductTable = product => {
    const productLink = ['/items/', product.id].join('');
    return (
        <div className="products-list-container">
            <div className="products-list-table">
                <Link 
                    to={productLink}
                >
                    <div className="product-row">
                        <ProductImage 
                            image={product.picture}
                        />
                        <div className="product-information-list">
                            <ProductPrice
                                {...product}
                            />
                            <div className="product-description">
                                <div className="product-title-list">
                                    {product.title}
                                </div>
                                <div className="product-condition-list">
                                    {product.condition}
                                </div>
                            </div>
                        </div>
                        <div className="product-location-list">
                              {product.location}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default  htmlProductTable;