import { FC } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { ICommentToCreate } from "../../../models/comment-model";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { validatorsFormCreateComment } from "../../../validators/validators-form-create-comment";
import { useCreateNewCommentConcretePostMutation } from "../../../redux/reducers-query/comments-reducer-query";
import { AuthSelector } from "../../../selectors/auth-selector";
import { CustomMultilineInput } from "../../custom-input/custom-multiline-input/custom-multiline-input";
import styles from "./form-create-comment.module.scss";

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
        <CustomMultilineInput
          control={control}
          name="content"
          minRows={3}
          validators={validatorsFormCreateComment}
        />
        <div className={styles.button_wrapper}>
          <Button
            type="submit"
            disabled={
              !formState.isValid ||
              isLoading ||
              formState.isSubmitting ||
              !!error
            }
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export { FormCreateComments };
