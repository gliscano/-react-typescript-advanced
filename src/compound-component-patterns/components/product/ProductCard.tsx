/* React */
import { createContext } from 'react';
import { useProduct } from '../../hooks/useProduct';
/* interfaces */
import { ProductContextProps, ProductCardProps } from '../../interfaces';
/* Styles */
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className }: ProductCardProps) => {
  const { counter , increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard} ${className}`}>
        { children }
      </div>
    </Provider>
  );
};
