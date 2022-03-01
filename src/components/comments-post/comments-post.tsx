import {useGetCommentsConcretePostQuery } from "../../redux/reducers-query/comments-reducer-query"
import { FC} from "react"
import { renderCommentPost, renderLoading } from "../../services/components-service/render-components-service"
import  {ListMemo} from "../list/list"
import { FormCreateComments } from "../form-create-comment/form-create-comment"


interface CommentsPostProps{
    idPost: number
}


//TODO: Доделать
const CommentsPost: FC<CommentsPostProps> = (props) => {

    const {idPost} = props
    const {isLoading, data: commentsData, error} = useGetCommentsConcretePostQuery(idPost)
 
    const loader = renderLoading(isLoading)
    const comments = !isLoading && commentsData ? <ListMemo 
                                        items={commentsData} renderItem={renderCommentPost} /> : null
    return (
        <div>
            {loader}
            {error}
            {comments}
            <FormCreateComments idPost={idPost}/>
        </div>
    )
}

export {CommentsPost}