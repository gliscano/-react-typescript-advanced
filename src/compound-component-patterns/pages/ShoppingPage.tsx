import { useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/index';
/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product/';
/* Styles */

// Data Mock
const products = [{
    id: '1',
    title: 'Coffee Mug - 001',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title: 'Coffee Mug - 002',
    img: './coffee-mug2.png'
  }
];

interface ProductInCart extends Product {
  count: number
}

const ShoppingPage = () => {
  const { shoppingCart, setShoppingCart } = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}: onChangeArgs) => {
    console.log('onProductCountChange');
    console.log(count, product)
    // console.log('shoppingCart', shoppingCart)
    // setShoppingCart(count);
  };

  return (
    <div>
      <h1> Shooping Store </h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {/* Add Components as Props */}
        {/* <ProductCard
          product={ product[0] }
          className='bg-dark text-white'
        >
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title className='text-white text-bold'/>
          <ProductCard.Buttons className='custom-buttons' /> 
        </ProductCard> */}

        {/* Add Components with imports */}
        {
          products.map((product) => (
            <ProductCard
              product={ product }
              className='bg-dark text-white'
              onChange={onProductCountChange}
            >
              <ProductImage className='custom-image' />
              <ProductTitle
                className='text-white text-bold'
              />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
      <div className='shopping-card'>
        <ProductCard
          product={ products[1] }
          className='bg-dark text-white'
          style={{ width: '25%' }}
        >
          <ProductImage className='custom-image' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
        <ProductCard
          product={ products[0] }
          className='bg-dark text-white'
          style={{ width: '25%' }}
        >
          <ProductImage className='custom-image' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
