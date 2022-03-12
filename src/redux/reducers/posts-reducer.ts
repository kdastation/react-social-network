import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IPost} from './../../models/post-model';

export interface IPostsState{
    posts: IPost[],
    isLoading: boolean,
    nameUser: string | null
}

const initialState: IPostsState = {
    posts: [],
    isLoading: true,
    nameUser: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<{posts: IPost[], nameUser: string}>){
            const prevNameUserInState = state.nameUser
            const receviedNameUser = action.payload.nameUser
            const receviedPosts = action.payload.posts
            if (prevNameUserInState !== receviedNameUser){
                state.posts = receviedPosts
                state.nameUser = receviedNameUser
                state.isLoading = false
            }
            else{
                state.posts.push(...receviedPosts)
                state.isLoading = false
            }
        },
        setLoading(state){
            state.isLoading = true
        },
        addNewPost(state, action: PayloadAction<IPost>){
            state.posts.push(action.payload)
        },
        resetPosts(state){
            state.posts = []
            state.isLoading = true
            state.nameUser = null
        }
    }
})

export const postsReducer = postsSlice.reducer

export const {addNewPost, setPosts, setLoading, resetPosts} = postsSlice.actions


