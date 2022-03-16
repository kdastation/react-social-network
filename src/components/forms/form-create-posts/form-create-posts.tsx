import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { validatorsFormCreatePost } from "../../../validators/validators-form-create-post";
import { createNewPost } from "../../../middlewares/posts-middlewares/posts-middlewares";
import { IPostToCreate } from "../../../models/post-model";
import { Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

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
      content: data.content,
      nameAuthor: nameUser,
    };
    try {
      await dispatch(createNewPost(newPost));
    } catch (error: any) {
      setError(error.message);
    }
    reset();
  };

  return (
    <div>
      <Typography>{nameUser} хотите создать новый пост?:)</Typography>
      <form onSubmit={handleSubmit(createPostOnClick)}>
        <Controller
          name="content"
          control={control}
          rules={validatorsFormCreatePost}
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                {...field}
                multiline
                minRows={5}
                color={"success"}
                value={field.value || ""}
                error={!!error?.message}
                helperText={error?.message}
              />
            );
          }}
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
