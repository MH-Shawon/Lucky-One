
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
           <Cart cart = {cart} setCart={setCart}></Cart>
            </div>
            {/* question part */}
            <div className='ques-section'>
                
            <div className='question-part1'> <h4>Ques:1</h4>
                <h5>How Reacts Works?</h5>
                <p>Ans:<br />
                1.React is predictable and efficient way using declarative code. <br />
                2. It helps to build single page applications. <br />
                3.It works by creating components. <br />
                4.Components accept input with data (a prop) and return a React element to declare what should appear on screen. <br />
                5. They can interact with other components via props to create a complex UI. </p>
            </div>
            <div className='question-part2'> <h4>Ques:2</h4>
                <h5>Props Vs State</h5>
                <p>Ans:<br />
                1.1.	Props are read-only.	State changes can be asynchronous. <br />
                2.	Props are immutable.	State is mutable. <br />
                3.Props make components reusable.	State cannot make components reusable. <br />
                4.Stateless component can have Props.	Stateless components cannot have State. <br />
                5.Props are external.The State is internal</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Shop;