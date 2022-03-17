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
        <ProductCard
          product={ product }
          className='bg-dark text-white'
        >
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title className='text-white text-bold'/>
          <ProductCard.Buttons className='custom-buttons' /> 
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

        {/* Add Components with imports and Styles as props */}
        <ProductCard
          product={ product }
          style={{
            backgroundColor: '#78D1F8'
          }}
        >
          <ProductImage
            style={{ boxShadow: '18px 10px 18px rgba(0,0,0,0.2)' }}
          />
          <ProductTitle
            title={'Cafeee'}
            style={{ fontWeight: 'bold' }}
          />
          <ProductButtons
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
