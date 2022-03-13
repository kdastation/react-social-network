import { useInput } from "../../../hooks/input-hook";
import React, { FC, memo} from "react";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../../middlewares/posts-middlewares/posts-middlewares";
import {IPostToCreate } from "../../../models/post-model";



interface FormCreatePostsProps{
    nameUser: string
}

const FormCreatePosts: FC<FormCreatePostsProps> = memo((props) => {
    
    const {nameUser} = props

    const contentInput = useInput()
    const dispatch = useDispatch()

    const createPostOnClick = () => {
        const newPost: IPostToCreate = {
            content: contentInput.value,
            nameAuthor: nameUser,
        } 
        dispatch(createNewPost(newPost))
        contentInput.clearValue()
    }

    return (
        <div>
            <input value={contentInput.value} onChange={contentInput.onChange} type="text" />
            <button onClick={createPostOnClick}> Добавить пост</button>
        </div>
    )
})

export {FormCreatePosts}