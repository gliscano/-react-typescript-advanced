/* React */
import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../../hooks/useProduct';
/* interfaces */
import { onChangeArgs, Product, ProductContextProps } from '../../interfaces';
/* Styles */
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {
  const { counter , increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        { children }
      </div>
    </Provider>
  );
};
