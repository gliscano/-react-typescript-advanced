import { useEffect, useRef, useState } from 'react';
import { Product } from '../interfaces';
import { onChangeArgs } from '../interfaces/index';

interface useProductArgs {
  product: Product;
  onChange?: (arg: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value);
    const isControled = useRef(!!onChange);
  
    const increaseBy = (value:number) => {
      if (isControled.current) {
        return onChange!({ count: value, product })
      }

      const newCounter = Math.max(counter + value, 0)
      setCounter( newCounter );

      onChange && onChange({ count: newCounter, product });
    };

    useEffect(() => {
      setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    };
};