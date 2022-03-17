import { ReactElement, CSSProperties } from "react";

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: ( value: number ) => void;
}