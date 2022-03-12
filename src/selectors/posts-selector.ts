
import { IPost } from './../models/post-model';
import { rootState } from './../redux/store';

class PostsSelector{

    static getPosts(state: rootState): IPost[]{
        return state.posts.posts
    }

    static getStatusLoading(state: rootState): boolean{
        return state.posts.isLoading
    }

}

export {PostsSelector}