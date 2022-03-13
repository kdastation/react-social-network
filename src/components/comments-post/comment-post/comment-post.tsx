import { FC, memo } from "react"
import { IComment } from "../../../models/comment-model"

interface CommentPostProps{
    comment: IComment
}

const CommentPost:FC<CommentPostProps> = memo((props) => {
    const {comment} = props

    console.log('RENDER COMMENT')
    return (
        <div>
            <div>
                {comment.nameAuthor}
            </div>
            <div>
                {comment.id}
            </div>
            <div>
                {comment.idPost}
            </div>
            <div>
                {comment.content}
            </div>
        </div>
    )
})

export {CommentPost}