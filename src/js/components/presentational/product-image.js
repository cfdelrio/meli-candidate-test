import React from 'react';

const productImage = ({image, className}) => 
    <div className={className}>
        <img src={require(`../../../images/products-images/${image}`)} />
    </div>

export default productImage;