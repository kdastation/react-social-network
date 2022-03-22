import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { validatorsFormCreatePost } from "../../../validators/validators-form-create-post";
import { createNewPost } from "../../../middlewares/posts-middlewares/posts-middlewares";
import { IPostToCreate } from "../../../models/post-model";
import { CustomMultilineInput } from "../../custom-input/custom-multiline-input/custom-multiline-input";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSubmitAndModal } from "../../../hooks/submit-and-modal-hook";
import { CustomModal } from "../../custom-modal/custom-modal";

interface FormCreatePostsProps {
  nameUser: string;
}

interface FormCreatePostsField {
  content: string;
}

const FormCreatePosts: FC<FormCreatePostsProps> = memo((props) => {
  const { nameUser } = props;
  const dispatch = useDispatch();
  const { control, handleSubmit, formState } = useForm<FormCreatePostsField>({
    mode: "onBlur",
  });

  const {
    message,
    submitData: updgradeSubmitCreatePost,
    isVisibleModal,
    defaultOnCloseModal,
  } = useSubmitAndModal(
    async (data: FormCreatePostsField) => {
      await createPostSumbit(data);
    },
    "Ваш пост успешно создан!",
    "Упс...Произошла ошибка!"
  );

  const createPostSumbit = async (data: FormCreatePostsField) => {
    const newPost: IPostToCreate = {
      ...data,
      nameAuthor: nameUser,
    };
    await dispatch(createNewPost(newPost));
  };

  return (
    <div>
      <Typography>{nameUser} хотите создать новый пост?:)</Typography>
      <form onSubmit={handleSubmit(updgradeSubmitCreatePost)}>
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
      {isVisibleModal && (
        <CustomModal
          isVisibleModal={isVisibleModal}
          message={message}
          onCloseModal={defaultOnCloseModal}
        />
      )}
    </div>
  );
});

export { FormCreatePosts };
