import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IPost} from './../../models/post-model';

export interface IPostsState{
    posts: IPost[],
    initialLoad: boolean,
    isReloading: boolean,
    hasMore: boolean
}

const initialState: IPostsState = {
    posts: [],
    initialLoad: false,
    isReloading: false,
    hasMore: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action: PayloadAction<{posts: IPost[], nameUser: string}>){
            state.hasMore = state.posts.length > 0
            const receviedPosts = action.payload.posts
            if (state.hasMore){
                state.posts.push(...receviedPosts)
                state.isReloading = false
            }else{
                state.posts = receviedPosts
                state.initialLoad = false
            }
        },
        setInitialLoading(state){
            state.initialLoad = true
        },
        setRealoding(state){
            state.isReloading = true
        },        
        addNewPost(state, action: PayloadAction<IPost>){
            state.posts.push(action.payload)
        },
        resetPosts(state){
            state.posts = []
            state.initialLoad = true
            state.hasMore = false
            state.isReloading = false
        }
    }
})

export const postsReducer = postsSlice.reducer

export const {addNewPost, 
            setPosts, 
            setInitialLoading, 
            resetPosts, 
            setRealoding} = postsSlice.actions


