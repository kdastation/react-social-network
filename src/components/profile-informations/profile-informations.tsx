import { FC, memo, useCallback } from "react"
import { IUser } from "../../models/user-model"
import { FormCreatePosts } from "../form-create-posts/form-create-posts"
import { Posts } from "../posts/posts"

interface ProfileInformationsProps{
    userData: IUser,
    isActiveUser: boolean
}

const ProfileInformations: FC<ProfileInformationsProps> = memo((props) => {

    const {userData, isActiveUser} = props

    const formCreatePosts = isActiveUser ? <FormCreatePosts nameUser={userData.name}/> : null
    const posts = <Posts nameUser={userData.name}/>

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