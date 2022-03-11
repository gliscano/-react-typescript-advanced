import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Lazyload1 from "../../pages/LazyPage1";
import Lazyload2 from "../../pages/LazyPage2";

const Navigation = () => {
  const { path, url } = useRouteMatch();

  return  (
    <>
        <h2>LazyLayout Pages</h2> 
        <ul>
          <li>
            <Link to={`${ url }/lazy1`}>Lazy Page 1 </Link>
          </li>
          <li>
            <Link to={`${ url }/lazy2`}>Lazy Page 2 </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={`${path}/lazy1`}>
            <Lazyload1 />
          </Route>
          <Route exact path={`${path}/lazy2`}>
            <Lazyload2 />
          </Route>
        </Switch>

        <Redirect to={`${path}/lazy1`} />
    </>
  );
};

export default Navigation;
