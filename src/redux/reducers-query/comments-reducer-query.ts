import { IComment, ICommentToCreate } from './../../models/comment-model';
import { apiUrlNames } from '../../services/api-service/const-api-service'
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


//TODO: Осознать то, что сделал
export const commentsSliceQuery = createApi({
    reducerPath: 'comments',
    baseQuery: fetchBaseQuery({baseUrl: apiUrlNames.MAIN_URL}),
    tagTypes: ['CommentsPost'],
    endpoints: (builder) => ({
        getCommentsConcretePost: builder.query<IComment[], number>({
            query: (idPost: number) => `${apiUrlNames.URL_COMMENTS_POST}${idPost}`,
            providesTags: (result, error, id) => [{ type: 'CommentsPost', id }],
        }),
        createNewCommentConcretePost: builder.mutation<IComment, ICommentToCreate>({
            query: (newComment: IComment) => ({
                url: apiUrlNames.URL_COMMENTS,
                method: 'POST',
                body: newComment
            }),
            invalidatesTags: (result, error, { idPost }) => [{ type: 'CommentsPost', id: idPost }]
        })
    })
})

export const {useGetCommentsConcretePostQuery, 
    useCreateNewCommentConcretePostMutation} = commentsSliceQuery



