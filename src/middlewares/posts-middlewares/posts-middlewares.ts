import { IPostToCreate } from './../../models/post-model';
import { addPostUser, getAllPostsUser } from '../../services/api-service/posts-api-service';
import { appDispatch } from './../../redux/store';
import { setPosts, addNewPost } from '../../redux/reducers/posts-reducer';


export const fetchPosts = (nameUser: string) => async (dispatch: appDispatch) => {
    const posts = await getAllPostsUser(nameUser)
    dispatch(setPosts(posts))
}

export const createNewPost = (post: IPostToCreate) => async (dispatch: appDispatch) => {
    const newPost = await addPostUser(post)
    dispatch(addNewPost(newPost))
}


