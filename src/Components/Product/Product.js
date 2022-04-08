import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCart} = props;
    const {img, name, id, price} = props.product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='pro-info'>
            <p><small>Name:{name} </small></p>
            <p>Id: {id}</p> 
            <p>Price:$ {price}</p>
            </div>
            <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>
                    Add to cart
                </p>
                <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;