import { FC } from "react"
import { useInput } from "../../hooks/input-hook"
import { ICommentToCreate } from "../../models/comment-model"
import { useCreateNewCommentConcretePostMutation } from "../../redux/reducers-query/comments-reducer-query"


interface FormCreateCommentsProps{
    idPost: number
}

//TODO: Доделать
const FormCreateComments: FC<FormCreateCommentsProps> = (props) => {

    const {idPost} = props
    const content = useInput()
    const [createPost, {data}] = useCreateNewCommentConcretePostMutation()

    const createPostOnClick = () => {
        const newComment: ICommentToCreate = {
            idPost,
            content: content.value,
            nameAuthor: 'kunistation',//TODO
        } 
        createPost(newComment)
        content.clearValue()
    }
    
    return (
        <div>
            <div>
                <input value={content.value} 
                        onChange={content.onChange} type="text" />
                <button onClick={createPostOnClick}>Добавить комментарий</button>
            </div>
        </div>
    )
}

export {FormCreateComments}