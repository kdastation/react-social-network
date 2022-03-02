import { List } from "../list/list";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../middlewares/posts-middlewares/posts-middlewares";
import { PostsSelector } from "../../selectors/posts-selector";
import { renderPost } from "../../services/components-service/render-components-service";


interface PostsProps{
    nameUser: string,
    isAuth: boolean
}

const Posts: FC<PostsProps> = memo((props) => {

    const {nameUser, isAuth} = props
    const dispatch = useDispatch()
    const posts = useSelector(PostsSelector.getPosts)
    console.log(nameUser)
    useEffect(() => {
        dispatch(fetchPosts(nameUser))
    },[nameUser, dispatch])

    return (
        <div>
            {
                posts.map((post) => {
                  return renderPost(post, isAuth)
                })
            }
        </div>
    )
})

//TODO: Придумать, как переделать
// {/* <List items={posts} 
//             renderItem={renderPost}/> */}

export {Posts}