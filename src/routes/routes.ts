import { Lazyload1 } from "../lazyload/pages/Lazyload1";
import { Lazyload2 } from "../lazyload/pages/Lazyload2";
import { Lazyload3 } from '../lazyload/pages/Lazyload3';

interface Route {
  to: string,
  path: string,
  Component: () => JSX.Element,
  name: string
};

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
    Component: Lazyload2,
    name: 'Lazy 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: Lazyload3,
    name: 'Lazy 3'
  }
];