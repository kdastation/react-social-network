import {useGetCommentsConcretePostQuery } from "../../redux/reducers-query/comments-reducer-query"
import { FC} from "react"
import { renderCommentPost, renderLoading } from "../../services/components-service/render-components-service"
import  {ListMemo} from "../list/list"
import { FormCreateComments } from "../form-create-comment/form-create-comment"


interface CommentsPostProps{
    idPost: number
    isAuth: boolean
}


//TODO: Доделать
const CommentsPost: FC<CommentsPostProps> = (props) => {

    const {idPost, isAuth} = props
    const {isLoading, data: commentsData, error} = useGetCommentsConcretePostQuery(idPost)
 
    const loader = renderLoading(isLoading)
    const comments = !isLoading && commentsData ? <ListMemo 
                                        items={commentsData} renderItem={renderCommentPost} /> : null
    const form = isAuth ?  <FormCreateComments idPost={idPost}/> : null
    return (
        <div>
            {loader}
            {error}
            {comments}
            {form}
        </div>
    )
}

export {CommentsPost}