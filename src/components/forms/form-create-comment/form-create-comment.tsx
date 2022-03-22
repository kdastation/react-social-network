import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ICommentToCreate } from "../../../models/comment-model";
import { CustomInput } from "../../custom-input/custom-input";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { validatorsFormCreateComment } from "../../../validators/validators-form-create-comment";
import { useCreateNewCommentConcretePostMutation } from "../../../redux/reducers-query/comments-reducer-query";
import { AuthSelector } from "../../../selectors/auth-selector";

interface FormCreateCommentsFields {
  content: string;
}

interface FormCreateCommentsProps {
  idPost: number;
}

//TODO: Доделать
const FormCreateComments: FC<FormCreateCommentsProps> = (props) => {
  const { idPost } = props;
  const [createPost, { isLoading, error }] =
    useCreateNewCommentConcretePostMutation();

  const nameActiveUser = useSelector(AuthSelector.getUserName);

  const { control, reset, formState, handleSubmit } =
    useForm<FormCreateCommentsFields>({
      mode: "onBlur",
      reValidateMode: "onBlur",
    });

  const createPostOnClick = async (data: FormCreateCommentsFields) => {
    const newComment: ICommentToCreate = {
      ...data,
      idPost,
      nameAuthor: nameActiveUser as string,
    };
    await createPost(newComment);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createPostOnClick)}>
        <CustomInput
          control={control}
          name="content"
          validators={validatorsFormCreateComment}
          Component={TextField}
          additionalErrorIndicator={!!error}
        />
        <Button
          type="submit"
          disabled={
            !formState.isValid || isLoading || formState.isSubmitting || !!error
          }
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export { FormCreateComments };
