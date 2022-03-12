
import { IPost } from './../models/post-model';
import { rootState } from './../redux/store';

class PostsSelector{

    static getPosts(state: rootState): IPost[]{
        return state.posts.posts
    }

    static getStatusInitialLoading(state: rootState): boolean{
        return state.posts.initialLoad
    }

    static getStatusReadloding(state: rootState): boolean{
        return state.posts.isReloading
    }

}

export {PostsSelector}