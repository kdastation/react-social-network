import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AuthSelector } from "../../../selectors/auth-selector"
import { logOut } from "../../../middlewares/auth-middleware/auth-middleware"
import { NavLink } from "react-router-dom"


const HeaderPrivate: FC = () => {

    const userName = useSelector(AuthSelector.getUserName)
    const dispatch = useDispatch()

    const logOutOnClick = (): void => {
        dispatch(logOut())
    }

    return (
        <>
            <li className="navigation-item">
                <NavLink to={`profile/${userName}`}>{userName}</NavLink>
                    
            </li>
            <li className="logounavigation-itemt">
                <button 
                onClick={logOutOnClick} 
                className="logout-btn">
                    Logout
                </button>
            </li>
        </>
    )
}

export {HeaderPrivate}