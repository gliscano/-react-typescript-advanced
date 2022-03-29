/* Components */
import {
  ProductCard,
  ProductButtons,
  ProductTitle,
  ProductImage
} from '../components/product';
/* Data Mock */
import products from '../data/products';
/* Styles */
import '../styles/custom-styles.css';

const product = products[0];

const ShoppingPage = () => {

  return (
    <div>
      <h3> Marketplace Demo </h3>
      <hr />
      <ProductCard
        product={ product }
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            count,
            isMaxCountReached,
            increaseBy,
            reset
           }) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white text-bold' />
              <ProductButtons
                className='custom-buttons'
                isMaxCounter={isMaxCountReached}
              />
              <button onClick={reset}>reset</button>
              <button onClick={() => increaseBy(+2)}>+2</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              <span>{count}</span>
            </>
          )
        }
      </ProductCard>
    </div>
  );
};

export default ShoppingPage;
