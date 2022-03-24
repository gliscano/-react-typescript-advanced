// React
import { CSSProperties, useContext } from 'react';
// Context
import { ProductContext } from './ProductCard';
// Styles
import styles from '../../styles/styles.module.css';
import '../../styles/custom-styles.css';

interface Props {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increaseBy } = useContext( ProductContext );
  
    return (
      <div
        className={`${styles.buttonsContainer} ${className} `}
        style={style}
      >
        <button
          className={styles.buttonMinus}
          onClick={() => increaseBy(-1)}
        >
          -
        </button>
        <div className={styles.countLabel}> {counter} </div>
        <button
          className={styles.buttonAdd}
          onClick={() => increaseBy(+1)}
        >
          +
        </button>
      </div>
    );
  };