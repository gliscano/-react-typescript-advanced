/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product';
/* Hooks */
import useShoppingCart from '../hooks/useShoppingCart';
/* Data Mock */
import products from '../data/products';
/* Styles */
import '../styles/custom-styles.css';

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h3> Marketplace Demo </h3>
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
          products.map((product, index) => (
            <ProductCard
              key={`${product.title}_${index}`}
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
      <div className='shopping-card-container'>
        { 
          Object.entries( shoppingCart ).map( ([key, product]) => (
            <ProductCard
              key={ key }
              product={ product }
              className='bg-dark text-white'
              onChange={ onProductCountChange}
              style={{ width: '80%' }}
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
