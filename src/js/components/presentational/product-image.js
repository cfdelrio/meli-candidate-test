import React from 'react';

const productImage = ({image}) => 
    <div className="product-image">
        <img src={require(`../../../images/products-images/${image}`)} />
    </div>

export default productImage;