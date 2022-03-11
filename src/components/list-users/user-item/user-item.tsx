import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutesNames } from "../../../routes/consts-routes";
import { IUserInformation } from "../../../models/user-models/user-information-model";

interface UserItemProps{
    userInformation: IUserInformation
}

const UserItem:FC<UserItemProps> = (props) => {

    const {userInformation} = props

    return (
        <div>
            <div>
                <Link to={`${RoutesNames.PROFILE_PAGE}${userInformation.name}`}>
                    {userInformation.name}
                </Link>
            </div>
        </div>
    )
}

export {UserItem}