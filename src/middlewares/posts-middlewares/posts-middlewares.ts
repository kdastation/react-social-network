import { IPostToCreate } from './../../models/post-model';
import { addPostUser, getAllPostsUser } from '../../services/api-service/posts-api-service';
import { appDispatch } from './../../redux/store';
import { setPosts, setInitialLoading, setRealoding } from '../../redux/reducers/posts-reducer';

const initialPagePosts = 1

export const fetchPosts = (nameUser: string, page : number = initialPagePosts) => 
                            async (dispatch: appDispatch) => {
    if (page === initialPagePosts){
        dispatch(setInitialLoading())
    }
    else{
        dispatch(setRealoding())
    }
    const {posts, totalCountPosts} = await getAllPostsUser(nameUser, page)
    dispatch(setPosts({posts, totalCountPosts}))
}

export const createNewPost = (post: IPostToCreate) => async (dispatch: appDispatch) => {
    const newPost = await addPostUser(post)
}


