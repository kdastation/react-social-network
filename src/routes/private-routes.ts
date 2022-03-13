import {IRoutes, RoutesNames} from "./consts-routes";
import {ProfilePage} from "../pages/profile-page/profile-page";
import {HomePage} from "../pages/home-page/home-page";
import { PageToCreateANewPost } from "../pages/page-to-create-a-new-post/page-to-create-a-new-post";


const privateRoutes: IRoutes[] = [
    {path: RoutesNames.HOME, component: HomePage, exact: true},
    {path: RoutesNames.PROFILE, component: ProfilePage, exact: true},
    {path: RoutesNames.PAGE_TO_CREATE_A_NEW_POST, component:PageToCreateANewPost, exact: true}
    
]

export {privateRoutes}