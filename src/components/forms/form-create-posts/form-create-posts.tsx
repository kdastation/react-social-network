import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { validatorsFormCreatePost } from "../../../validators/validators-form-create-post";
import { createNewPost } from "../../../middlewares/posts-middlewares/posts-middlewares";
import { IPostToCreate } from "../../../models/post-model";
import { CustomMultilineInput } from "../../custom-input/custom-multiline-input/custom-multiline-input";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

interface FormCreatePostsProps {
  nameUser: string;
}

interface FormCreatePostsField {
  content: string;
}

const FormCreatePosts: FC<FormCreatePostsProps> = memo((props) => {
  const { nameUser } = props;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { control, handleSubmit, formState, reset } =
    useForm<FormCreatePostsField>({
      mode: "onBlur",
    });

  const createPostOnClick = async (data: FormCreatePostsField) => {
    const newPost: IPostToCreate = {
      ...data,
      nameAuthor: nameUser,
    };
    try {
      await dispatch(createNewPost(newPost));
    } catch (error: any) {
      setError(error?.message);
    }
    reset();
  };

  return (
    <div>
      <Typography>{nameUser} хотите создать новый пост?:)</Typography>
      <form onSubmit={handleSubmit(createPostOnClick)}>
        <CustomMultilineInput
          control={control}
          name="content"
          validators={validatorsFormCreatePost}
        />
        <Button
          disabled={!formState.isValid || formState.isSubmitting}
          type="submit"
        >
          Создать пост
        </Button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
});

export { FormCreatePosts };
