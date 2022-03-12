import { resetPosts } from "../../redux/reducers/posts-reducer";
import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../middlewares/posts-middlewares/posts-middlewares";
import { PostsSelector } from "../../selectors/posts-selector";
import { renderPosts } from "../../services/components-service/render-components-service";
import { Loader } from "../loader/loader";


interface PostsProps{
    nameUser: string,
    isAuth: boolean
}

const Posts: FC<PostsProps> = memo((props) => {

    const {nameUser, isAuth} = props
    const dispatch = useDispatch()
    const posts = useSelector(PostsSelector.getPosts)
    const isLoading = useSelector(PostsSelector.getStatusLoading)
    const [page, setPage] = useState(1)

    useEffect(()=>{
        return () => {
            dispatch(resetPosts())
        }
    },[])

    useEffect(() => {
        dispatch(fetchPosts(nameUser, page))
    },[nameUser, dispatch, page])

    const postsBlock = renderPosts(posts, isAuth)
    const loading = isLoading ? <Loader/> : null
    return (
        <div>
            {postsBlock}
            <button onClick={()=> setPage(page => page + 1)}>Показать еще</button>
            {loading}
        </div>
    )
})

//TODO: Придумать, как переделать
// {/* <List items={posts} 
//             renderItem={renderPost}/> */}

export {Posts}