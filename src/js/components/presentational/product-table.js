import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './product-image'

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
                        <div className="product-information">
                            <div className="product-price">
                                <div className="product-price-currency">
                                        {product.price.currency}
                                </div>
                                <div className="product-price-amount">
                                        {product.price.amount},{product.price.decimals}
                                </div>
                                <div className="product-price-ico">
                                    <img src={require('../../../images/ic_shipping.png')} />
                                </div>
                            </div>
                            <div className="product-description">
                                <div className="product-title">
                                    {product.title}
                                </div>
                                <div className="product-condition">
                                    {product.condition}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default  htmlProductTable;