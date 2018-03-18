import React from 'react';

const productPrice = productFetched => <div className="product-price">
    <div className="product-price-currency">
            {productFetched.price.currency}
    </div>
    <div className="product-price-amount">
            {productFetched.price.amount},{productFetched.price.decimals}
    </div>
    <div className="product-price-ico">
        <img src={require('../../../images/ic_shipping.png')} />
    </div>
</div>

export default productPrice;