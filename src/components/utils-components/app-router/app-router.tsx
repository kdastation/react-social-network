import {Switch, Route, Redirect} from "react-router-dom";
import {FC} from "react";
import {privateRoutes} from "../../../routes/private-routes";
import {publicRoutes} from "../../../routes/public-routes";
import {useSelector} from "react-redux";
import {AuthSelector} from "../../../selectors/auth-selector";
import {RoutesNames} from "../../../routes/consts-routes";


const AppRouter: FC = () => {

    const isAuth = useSelector(AuthSelector.getIsAuthStatus)

    return(
        <>
            {
                isAuth ?

                    <Switch>
                        {privateRoutes.map(route => {
                            return <Route {...route}
                                          key={route.path}
                            />
                        })}
                        <Redirect to={RoutesNames.HOME} />
                    </Switch>

                    :

                    <Switch>
                        {publicRoutes.map(route => {
                            return <Route {...route}
                                          key={route.path}
                            />
                        })}
                    </Switch>
            }
        </>
    )
}

export {AppRouter}