
import { IPost } from './../models/post-model';
import { rootState } from './../redux/store';

class PostsSelector{

    static getPosts(state: rootState): IPost[]{
        return state.posts.posts
    }

}

export {PostsSelector}