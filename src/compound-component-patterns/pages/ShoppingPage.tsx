import ProductCard, { ProductTitle } from '../components/product/ProductCard';
import { ProductImage } from '../components/product/ProductCard';

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
        <ProductCard product={ product }>
          <ProductImage />
          <ProductTitle title={''} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
