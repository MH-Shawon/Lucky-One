
import Product from '../Product/Product';
import './Shop.css'
import FakeData from '../FakeData/products.json'
import Cart from '../Cart/Cart';
import { useState } from 'react';



    const Shop = () => {
        const [cart, setCart] = useState([])
   const product = FakeData;
   const handleAddToCart = (product) =>{
     console.log(product)
     const newCart = [...cart, product];
     setCart(newCart)
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
           <Cart>
               
           </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;