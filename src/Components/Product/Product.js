import React from 'react';
import './Product.css';

const Product = (props) => {
    
    const {img, name, id, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pro-info'>
            <p><small>Name:{name} </small></p>
            <p>Id: {id}</p> 
            <p>Price:$ {price}</p>
            </div>
            <button onClick={() => props.eventAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>
                    Add to cart
                </p>
            </button>
        </div>
    );
};

export default Product;