
import Product from '../Product/Product';
import './Shop.css'
import FakeData from '../FakeData/products.json'
import Cart from '../Cart/Cart';



    const Shop = () => {
   const product = FakeData;
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
                   ></Product>)
               }
            </div>
            <div className='cart-container'> 
           <Cart></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;