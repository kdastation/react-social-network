import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IPost} from './../../models/post-model';

export interface IPostsState{
    posts: IPost[],
    initialLoad: boolean,
    isReloading: boolean,
    hasMore: boolean,
    totalCountPosts: number
}

const initialState: IPostsState = {
    posts: [],
    initialLoad: false,
    isReloading: false,
    hasMore: false,
    totalCountPosts: 0
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<{posts: IPost[], totalCountPosts: number}>){
            state.hasMore = state.posts.length > 0
            const receviedPosts = action.payload.posts
            if (state.hasMore){
                state.posts.push(...receviedPosts)
                state.isReloading = false
            }else{
                state.posts = receviedPosts
                state.initialLoad = false
                state.totalCountPosts = action.payload.totalCountPosts
            }
        },
        setInitialLoading(state){
            state.initialLoad = true
        },
        setRealoding(state){
            state.isReloading = true
        },        
        resetPosts(state){
            state.posts = []
            state.initialLoad = true
            state.hasMore = false
            state.isReloading = false
            state.totalCountPosts = 0
        }
    }
})

export const postsReducer = postsSlice.reducer

export const { 
            setPosts, 
            setInitialLoading, 
            resetPosts, 
            setRealoding} = postsSlice.actions


