
import Product from '../Product/Product';
import './Shop.css'
import FakeData from '../FakeData/products.json'
import Cart from '../Cart/Cart';
import { useState } from 'react';



    const Shop = () => {
        const [cart, setCart] = useState([])
   const product = FakeData;
   const handleAddToCart = (product) =>{
     
     const newCart = [...cart, product];
     setCart(newCart);
   }
    return (
        <div>
            <div className='shop-name'>
                <h2>Cricket Mart</h2>
                </div>
            <div className='shop-container'>
            
            <div className='products-container'>
              {
                   product.map(product =><Product
                   key ={product.id}
                   product = {product}
                   handleAddToCart={handleAddToCart}
                   ></Product>)
               }
            </div>
            <div className='cart-container'> 
           <Cart cart = {cart}></Cart>
            </div>
            <div className='ques-section'>
                
            <div className='question-part1'> <h4>Ques:1</h4>
                <h5>How Reacts Works?</h5>
                <p>Ans:<br />
                1.</p>
            </div>
            <div className='question-part2'> <h4>Ques:2</h4>
                <h5>Props Vs State</h5>
                <p>Ans:<br />
                1.</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Shop;