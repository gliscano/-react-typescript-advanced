export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: ( value: number ) => void;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}