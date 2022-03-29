import { Switch, Route, Redirect } from "react-router-dom";
import { FC } from "react";
import { privateRoutes } from "../../../routes/private-routes";
import { publicRoutes } from "../../../routes/public-routes";
import { useSelector } from "react-redux";
import { AuthSelector } from "../../../redux/selectors/auth-selector";
import { RoutesNames } from "../../../routes/consts-routes";

//TODO: Немного передалть
const AppRouter: FC = () => {
  const isAuth = useSelector(AuthSelector.getIsAuthStatus);
  const isLoading = useSelector(AuthSelector.getLoadingStatus);

  return (
    <>
      {isAuth && !isLoading ? (
        <Switch>
          {privateRoutes.map((route) => {
            console.log(route);
            return <Route {...route} key={route.path} />;
          })}
          <Redirect to={RoutesNames.HOME} />
        </Switch>
      ) : null}

      {!isAuth && !isLoading && (
        <Switch>
          {publicRoutes.map((route) => {
            console.log(route);
            return <Route {...route} key={route.path} />;
          })}
          <Redirect to={RoutesNames.HOME} />
        </Switch>
      )}
    </>
  );
};

export { AppRouter };
