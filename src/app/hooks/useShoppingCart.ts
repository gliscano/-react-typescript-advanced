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
    // Delete product without count
     if ( count === 0) {
      const { [product.id]: toDelete, ...rest } = prevState;
      return rest;
     }

      return {
        ...prevState,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};

export default useShoppingCart;
