
export interface IComment{
    id: number,
    idPost: number,
    nameAuthor: string,
    content: string
}

export interface ICommentToCreate{
    idPost: number,
    nameAuthor: string
    content: string
}