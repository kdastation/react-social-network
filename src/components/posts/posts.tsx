import { List } from "../list/list";
import { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../middlewares/posts-middlewares/posts-middlewares";
import { PostsSelector } from "../../selectors/posts-selector";
import { renderPost } from "../../services/components-service/render-components-service";


interface PostsProps{
    nameUser: string
}

const Posts: FC<PostsProps> = memo((props) => {

    const {nameUser} = props
    const dispatch = useDispatch()
    const posts = useSelector(PostsSelector.getPosts)

    useEffect(() => {
        dispatch(fetchPosts(nameUser))
    },[nameUser, dispatch])

    return (
        <div>
            <List items={posts} 
            renderItem={renderPost}/>
        </div>
    )
})


export {Posts}