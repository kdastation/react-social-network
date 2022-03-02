
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../middlewares/posts-middlewares/posts-middlewares";
import { PostsSelector } from "../../selectors/posts-selector";
import { renderPosts } from "../../services/components-service/render-components-service";


interface PostsProps{
    nameUser: string,
    isAuth: boolean
}

const Posts: FC<PostsProps> = memo((props) => {

    const {nameUser, isAuth} = props
    const dispatch = useDispatch()
    const posts = useSelector(PostsSelector.getPosts)
    
    useEffect(() => {
        dispatch(fetchPosts(nameUser))
    },[nameUser, dispatch])

    const postsBlock = renderPosts(posts, isAuth)

    return (
        <div>
            {postsBlock}
        </div>
    )
})

//TODO: Придумать, как переделать
// {/* <List items={posts} 
//             renderItem={renderPost}/> */}

export {Posts}