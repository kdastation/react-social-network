import { FC, memo} from "react"
import { Link } from "react-router-dom"
import { IUserInformation } from "../../models/user-models/user-information-model"
import { RoutesNames } from "../../routes/consts-routes"
import { Posts } from "../posts/posts"

interface ProfileInformationsProps{
    userData: IUserInformation,
    isActiveUser: boolean,
    isAuth: boolean
}

const ProfileInformations: FC<ProfileInformationsProps> = memo((props) => {

    const {userData, isActiveUser, isAuth} = props

    const linkToNewPostPage = isActiveUser ? 
                            <Link to={RoutesNames.PAGE_TO_CREATE_A_NEW_POST}>Создать новый пост
                            </Link> : null
    const posts = <Posts isAuth={isAuth} nameUser={userData.name}/>

    return (
        <div>
            <div>
            {linkToNewPostPage}
            </div>
            <div>
                {userData.name}
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
})

export {ProfileInformations}