import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IPost} from './../../models/post-model';

export interface IPostsState{
    posts: IPost[],
}

const initialState: IPostsState = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<IPost[]>){
            state.posts.push(...action.payload)
        },

        addNewPost(state, action: PayloadAction<IPost>){
            state.posts.push(action.payload)
        }
    }
})

export const postsReducerUpgrade = postsSlice.reducer

export const {addNewPost, setPosts} = postsSlice.actions


