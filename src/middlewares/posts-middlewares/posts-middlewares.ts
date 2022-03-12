import { IPostToCreate } from './../../models/post-model';
import { addPostUser, getAllPostsUser } from '../../services/api-service/posts-api-service';
import { appDispatch } from './../../redux/store';
import { setPosts, addNewPost, setLoading } from '../../redux/reducers/posts-reducer';


export const fetchPosts = (nameUser: string, page : number = 1) => async (dispatch: appDispatch) => {
    dispatch(setLoading())
    const posts = await getAllPostsUser(nameUser, page)
    dispatch(setPosts({posts, nameUser}))
}

export const createNewPost = (post: IPostToCreate) => async (dispatch: appDispatch) => {
    const newPost = await addPostUser(post)
    dispatch(addNewPost(newPost))
}


