import React from 'react';

const productPrice = product => <div className="product-price">
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

export default productPrice;