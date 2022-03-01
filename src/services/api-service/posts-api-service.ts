import { IComment } from './../../models/comment-model';
import { IPost, IPostToCreate } from './../../models/post-model';
import  axios from 'axios';
import { apiUrlNames } from './const-api-service';


const getAllPostsUser = async (nameUser: string): Promise<IPost[]> => {
    const response = await axios.get<IPost[]>(apiUrlNames.MAIN_URL+apiUrlNames.URL_POSTS_USER+nameUser)
    return response.data    
}

const addPostUser = async (post: IPostToCreate) => {
    const response = await axios.post<IPost>(apiUrlNames.MAIN_URL+apiUrlNames.URL_POSTS, post)
    return response.data
}

const getCommentsPost = async (idPost: number): Promise<IComment[]> => {
    const response = await axios.get<IComment[]>(apiUrlNames.MAIN_URL+apiUrlNames.URL_COMMENTS_POST+idPost)
    return response.data
}

export {getAllPostsUser, addPostUser, getCommentsPost}