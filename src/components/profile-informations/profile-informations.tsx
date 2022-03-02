import { FC, memo} from "react"
import { IUser } from "../../models/user-model"
import { FormCreatePosts } from "../form-create-posts/form-create-posts"
import { Posts } from "../posts/posts"

interface ProfileInformationsProps{
    userData: IUser,
    isActiveUser: boolean,
    isAuth: boolean
}

const ProfileInformations: FC<ProfileInformationsProps> = memo((props) => {

    const {userData, isActiveUser, isAuth} = props

    const formCreatePosts = isActiveUser ? <FormCreatePosts nameUser={userData.name}/> : null
    const posts = <Posts isAuth={isAuth} nameUser={userData.name}/>

    return (
        <div>
            <div>
                {userData.name}
            </div>
            <div>
                {posts}
            </div>
            {formCreatePosts}
        </div>
    )
})

export {ProfileInformations}