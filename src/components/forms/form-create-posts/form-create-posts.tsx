import { useInput } from "../../../hooks/input-hook";
import React, { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { createNewPost } from "../../../middlewares/posts-middlewares/posts-middlewares";
import { IPostToCreate } from "../../../models/post-model";
import { TextField } from "@mui/material";

interface FormCreatePostsProps {
  nameUser: string;
}

const FormCreatePosts: FC<FormCreatePostsProps> = memo((props) => {
  const { nameUser } = props;

  const contentInput = useInput();
  const dispatch = useDispatch();

  const createPostOnClick = () => {
    const newPost: IPostToCreate = {
      content: contentInput.value,
      nameAuthor: nameUser,
    };
    dispatch(createNewPost(newPost));
    contentInput.clearValue();
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label={`${nameUser}?:)`}
        variant="standard"
        value={contentInput.value}
        onChange={contentInput.onChange}
      />
      <button onClick={createPostOnClick}> Добавить пост</button>
    </div>
  );
});

export { FormCreatePosts };
