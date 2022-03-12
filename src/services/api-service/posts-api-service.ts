import { getCountItemsFromHeaders } from './../../utils/utils-api';
import { IComment } from './../../models/comment-model';
import { IPost, IPostToCreate } from './../../models/post-model';
import  axios from 'axios';
import { apiUrlNames } from './const-api-service';




const getAllPostsUser = async (nameUser: string, 
                                page : number = 1): 
                                Promise<{posts: IPost[],totalCountPosts:number }> => {
    const urlAddres = `${apiUrlNames.MAIN_URL}${apiUrlNames.URL_POSTS_USER}${nameUser}&_limit=3&_page=${page}`
    const response = await axios.get<IPost[]>(urlAddres)
    const totalCountPosts = getCountItemsFromHeaders(response)
    return {
        posts: response.data,
        totalCountPosts
    }   
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