
import { CommentPost } from "../../components/comment-post/comment-post"
import { Loader } from "../../components/loader/loader"
import { Post } from "../../components/post/post"
import { IComment } from "../../models/comment-model"
import { IPost } from "../../models/post-model"

export const renderLoading = (isLoading: boolean): JSX.Element | null => {
    const loader = isLoading ? <Loader/> : null
    return loader
}

export const renderError = (isLoading: boolean, errorMessage: string | null): JSX.Element | null => {
    const error = errorMessage && !isLoading ? <div>{errorMessage}</div> : null
    return error
}

export const renderPost = (post: IPost, isAuth: boolean): React.ReactNode => {
    return <Post isAuth={isAuth} key={`${post.nameAuthor}_${post.id}`} 
    post={post}/>
}

export const renderCommentPost = (comment: IComment): React.ReactNode => {
    return <CommentPost key={comment.id} comment={comment}/>
}

