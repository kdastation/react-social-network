import { resetPosts } from "../../redux/reducers/posts-reducer";
import { FC, memo, useEffect} from "react";
import { useDispatch} from "react-redux";
import { fetchPosts} from "../../middlewares/posts-middlewares/posts-middlewares";
import { renderPosts } from "../../services/components-service/render-components-service";
import { Loader } from "../loader/loader";
import { usePaginationButton } from "../../hooks/pagination-button-hook";
import { usePostsInformations } from "../../hooks/posts-information";


interface PostsProps{
    nameUser: string,
    isAuth: boolean
}
//TODO: Доделать
const Posts: FC<PostsProps> = memo((props) => {

    const {nameUser, isAuth} = props
    const dispatch = useDispatch()
    const {isInitialLoading, isRealoding, posts, totalCountPosts} = usePostsInformations()
    const {currentPage, quantityOfPageNumbers, changeCurrentPage, lastPage
           } = usePaginationButton(totalCountPosts, 3, 1)

    useEffect(()=>{
        return () => {
            dispatch(resetPosts())
        }
    },[dispatch])

    useEffect(() => {
        dispatch(fetchPosts(nameUser, currentPage))
    },[nameUser, dispatch, currentPage])

    const postsBlock = renderPosts(posts, isAuth)
    const loading = isInitialLoading ? <Loader/> : null
    const reaload = isRealoding ? <div>Loading....</div> : null

    return (
        <div>
            {loading}
            {postsBlock}
            {reaload}
            {
                currentPage !== lastPage && quantityOfPageNumbers > 0 ? 
                                        <button onClick={()=> 
                                        changeCurrentPage(currentPage + 1)}>
                                        Показать еще</button> 
                                        : null
            }
            
            
        </div>
    )
})

//TODO: Придумать, как переделать
// {/* <List items={posts} 
//             renderItem={renderPost}/> */}

export {Posts}