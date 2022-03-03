import { lazy, LazyExoticComponent } from "react";
import Lazyload3 from "../lazyload/pages/Lazyload3";
// import Lazyload1 from "../lazyload/pages/Lazyload1";

type JSXComponent = () => JSX.Element; 

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent ,
  name: string
};

const LazyLayout = lazy(() => import(/* webpackChunkName: "Lazylayout" */'../layout/Lazylayout'));

export const routes:Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazy1',
    Component: LazyLayout,
    name: 'Lazy 1'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazyload3,
    name: 'Lazy 3'
  }
];