/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product/';
/* Styles */

// Data Mock
const product = {
  id: '1',
  title: 'Coffee Mug - 001',
  img: './coffee-mug.png'
};

const ShoppingPage = () => {
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
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons /> 
        </ProductCard>

        {/* Add Components with imports */}
        <ProductCard
          product={ product }
          className='bg-dark text-white'
        >
          <ProductImage className='custom-image' />
          <ProductTitle
            title={'Cafeee'}
            className='text-white text-bold'
          />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
