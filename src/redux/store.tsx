import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./reducers/posts-reducer";
import { commentsSliceQuery } from "./reducers-query/comments-reducer-query";
import { usersSliceQuery } from "./reducers-query/users-reducer-query";
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  [commentsSliceQuery.reducerPath]: commentsSliceQuery.reducer,
  [usersSliceQuery.reducerPath]: usersSliceQuery.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      commentsSliceQuery.middleware,
      usersSliceQuery.middleware
    ),
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
