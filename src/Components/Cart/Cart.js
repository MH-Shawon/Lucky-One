import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let name = [] ;
    let totalPrice = 0;
    for(const product of cart){
        name = name + product.name;
        totalPrice = totalPrice + product.price
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item:{cart.length}</p>
            <p>
                <ul>
                    <li>{name}</li>
                </ul>
            </p>
            <p>Total Price:${totalPrice}</p>
            <div>
            <button className='chose-one'>Chose One</button> <br />
            <button className='chose-again'  >Chose Again</button>
            </div>
        </div>
    );
};

export default Cart;