// React
import { useContext } from "react";
// Context
import { ProductContext } from "./ProductCard";
// Styles
import styles from '../../styles/styles.module.css';

interface Props {
  title?: string,
  className?:string,
}

export const ProductTitle = ({ title, className }: Props) => {
    const { product } = useContext(ProductContext);
  
    return (
      <span className={`${styles.productDescription} ${className}`}>
        { title || product.title }
      </span>
    );
  };