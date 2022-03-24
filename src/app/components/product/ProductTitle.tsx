// React
import { useContext, CSSProperties } from "react";
// Context
import { ProductContext } from "./ProductCard";
// Styles
import styles from '../../styles/styles.module.css';

interface Props {
  title?: string,
  className?:string,
  style?: CSSProperties,
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext);
  
    return (
      <span
        className={`${styles.productDescription} ${className}`}
        style={style}
      >
        { title || product.title }
      </span>
    );
  };