import { IPostToCreate } from './../../models/post-model';
import { addPostUser, getAllPostsUser } from '../../services/api-service/posts-api-service';
import { appDispatch } from './../../redux/store';
import { setPosts, addNewPost, setInitialLoading, setRealoding } from '../../redux/reducers/posts-reducer';

const initialPagePosts = 1

export const fetchPosts = (nameUser: string, page : number = initialPagePosts) => 
                            async (dispatch: appDispatch) => {
    if (page === initialPagePosts){
        dispatch(setInitialLoading())
    }
    else{
        dispatch(setRealoding())
    }
    const posts = await getAllPostsUser(nameUser, page)
    dispatch(setPosts({posts, nameUser}))
}

export const createNewPost = (post: IPostToCreate) => async (dispatch: appDispatch) => {
    const newPost = await addPostUser(post)
    dispatch(addNewPost(newPost))
}


