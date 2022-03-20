import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { validatorsFormCreatePost } from "../../../validators/validators-form-create-post";
import { CustomMultilineInput } from "../../custom-input/custom-multiline-input/custom-multiline-input";

interface FormUpdatePostProps {
  contentPost: string;
  updatePostOnClick: Function;
}

export interface FormUpdatePostField {
  content: string;
}

const FormUpdatePost: FC<FormUpdatePostProps> = (props) => {
  const { contentPost, updatePostOnClick } = props;
  const { control, handleSubmit, formState } = useForm<FormUpdatePostField>({
    mode: "onBlur",
  });

  const updatePost = async (data: FormUpdatePostField) => {
    await updatePostOnClick(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(updatePost)}>
        <CustomMultilineInput
          control={control}
          name="content"
          defaultValue={contentPost}
          validators={validatorsFormCreatePost}
        />
        <Button
          disabled={!formState.isValid || formState.isSubmitting}
          type="submit"
        >
          Приминить измения
        </Button>
      </form>
    </div>
  );
};

export { FormUpdatePost };
