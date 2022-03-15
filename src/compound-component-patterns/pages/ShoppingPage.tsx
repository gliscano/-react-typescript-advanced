/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product/';

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
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={'Cafeee'} />
          <ProductButtons /> 
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
