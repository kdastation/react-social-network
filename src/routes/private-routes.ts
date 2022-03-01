import {IRoutes, RoutesNames} from "./consts-routes";
import {ProfilePage} from "../pages/profile-page/profile-page";
import {HomePage} from "../pages/home-page/home-page";

const privateRoutes: IRoutes[] = [
    {path: RoutesNames.HOME, component: HomePage, exact: true},
    {path: RoutesNames.PROFILE, component: ProfilePage, exact: true}
]

export {privateRoutes}