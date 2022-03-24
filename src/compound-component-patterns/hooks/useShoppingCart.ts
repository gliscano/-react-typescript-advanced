/* React */
import { useState } from "react";
/* Interfaces */
import { onChangeArgs, Product } from "../interfaces";


interface ProductInCart extends Product {
  count: number;
}

const useShoppingCart = () => {
  const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

  const onProductCountChange = ({count, product}: onChangeArgs) => {

    setShoppingCart(( prevState ) => {
      const productInCart: ProductInCart = prevState[product.id] || { ...product, count: 0 };

      if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
        productInCart.count += count;

        return {
          ...prevState,
          [product.id]: productInCart
        };
      }

      // Delete product without count
      const { [product.id]: toDelete, ...rest } = prevState;
      return { ...rest }
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};

export default useShoppingCart;
