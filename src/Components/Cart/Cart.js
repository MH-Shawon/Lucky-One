import React, { useState } from 'react';
import './Cart.css'

    const Cart = (props) => {
    const {cart, setCart} = props;
    const [selected, setSelected] = useState([]);
    
    let totalPrice = 0;
    for(const product of cart){
       totalPrice = totalPrice + product.price
    }
    const chooseOne = () => {
        const ranNum = Math.floor(Math.random() * cart.length);
        const randPro = cart.filter((data, i)=> i === ranNum);
        setSelected(randPro)
    }
    const clearCart = () => {
        setCart([]);
    }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item:{cart.length}</p>
            <p>
                <ul>
                    {cart.map(data =><li>{data.name}</li>)
                    }
                </ul>
            </p>
            <p>Total Price:${totalPrice}</p>
            <div>
            <button className='chose-one' onClick={() => chooseOne()}>Chose One</button> <br />
            <button className='chose-again' onClick={() => clearCart()}>Clear Cart</button>
            <h3>Chosen Item</h3>
            <p>
                <ul>
                    {
                        selected.map(data => 
                             <li>{data.name}</li>
                            
                            )
                    }
                </ul>
            </p>
            </div>
        </div>
    );
};

export default Cart;