import { useState } from 'react';
import { Product } from '../interfaces';
import { onChangeArgs } from '../interfaces/index';

interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangeArgs) => void
}

export const useProduct = ({ onChange, product }: useProductArgs) => {

    const [counter, setCounter] = useState(0);
  
    const increaseBy = (value:number) => {
      const newCounter = Math.max(counter + value, 0)
      setCounter( newCounter );

      onChange && onChange({ count: newCounter, product });
    };

    return {
        counter,
        increaseBy
    };
};