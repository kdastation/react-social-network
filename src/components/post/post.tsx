import { FC, memo} from "react";
import { useVisible } from "../../hooks/visible-hook";
import { IPost } from "../../models/post-model";
import { CommentsPost } from "../comments-post/comments-post";

interface PostProps{
    post: IPost
}


//TODO: Оптимизировать доделать
const Post: FC<PostProps> = memo((props) => {

    const {post} = props
    const commentsState = useVisible(false)
    const comments = commentsState.isVisible ? <CommentsPost idPost={post.id}/> : null
    return (
        <div>
            <p>{post.nameAuthor}</p>
            <p>{post.content}</p>
            <p>{post.id}</p>
            {comments}
            <button onClick={commentsState.toogleVisible}>Посмотреть отзывы</button>
        </div>
    )
})

export {Post}