import { lazy, LazyExoticComponent } from 'react';
import Lazyload2 from '../pages/LazyPage2';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[]
};

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../layout/LazyLayout'));

const routes:Route[] = [
    {
        path: '/lazy1',
        Component: LazyLayout,
        name: 'Lazy Page 1'
    },
    {
        path: '/lazy2',
        Component: Lazyload2,
        name: 'No Lazy - Page 2'
    },
];

export default routes;