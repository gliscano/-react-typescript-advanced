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
const products: Product[] = [
  {
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
  count: number;
}

const ShoppingPage = () => {
  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}: {count:number , product:Product}) => {
    setShoppingCart(( prevState ) => {

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevState;
        console.log(toDelete);

        return { ...rest }
      }

      return {
        ...prevState,
        [product.id]: {...product, count}
      }
    });
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
              value={ shoppingCart[product.id]?.count || 0 }
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
        { 
          Object.entries( shoppingCart ).map( ([key, product]) => (
            <ProductCard
              key={ key }
              product={ product }
              className='bg-dark text-white'
              style={{ width: '15%' }}
              onChange={ onProductCountChange}
              value={ product.count }
            >
              <ProductImage className='custom-image' />
              <ProductButtons
                className='custom-buttons'
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
};

export default ShoppingPage;
