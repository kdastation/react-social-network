import {FC} from "react";
import { useSelector } from "react-redux";
import { FormCreatePosts } from "../../components/forms/form-create-posts/form-create-posts";
import { AuthSelector } from "../../selectors/auth-selector";


const PageToCreateANewPost: FC = () => {

    const nameUser = useSelector(AuthSelector.getUserName)
    const formCreatePosts = nameUser ? <FormCreatePosts nameUser={nameUser}/> : null
    return (
        <div>
            {formCreatePosts}
        </div>
    )
}

export {PageToCreateANewPost}