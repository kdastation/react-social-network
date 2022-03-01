import { FC } from "react"
import { NavLink } from "react-router-dom"
import { RoutesNames } from "../../../routes/consts-routes"



const HeaderPublic: FC = () => {
    return (
        <>
            <li className="navigation-item">
                <NavLink to={RoutesNames.HOME}>Home</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink to={RoutesNames.LOGIN}>Login</NavLink>
            </li>
            <li className="navigation-item">
                <NavLink to={RoutesNames.REGISTRATION}>Registration</NavLink>
            </li>
        </>
    )
}

export {HeaderPublic}