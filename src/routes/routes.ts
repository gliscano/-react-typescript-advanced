import { lazy, LazyExoticComponent } from "react";
import Lazyload1 from "../lazyload/pages/Lazyload1";

type JSXComponent = () => JSX.Element; 

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent ,
  name: string
};

// const Lazy1 = lazy(() => import('../lazyload/pages/Lazyload1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../lazyload/pages/Lazyload2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../lazyload/pages/Lazyload3'));

export const routes:Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazyload1,
    name: 'Lazy 1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: Lazy2,
    name: 'Lazy 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazy3,
    name: 'Lazy 3'
  }
];