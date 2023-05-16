import React from 'react';

function Product(props) {
    return (
        <div className="product">
            <h2>{props.title}</h2>
            <p>Price: ${props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    );
}

export default Product;
