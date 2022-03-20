import { FC } from "react";
import { ValidatorsType } from "../../../validators/validators-helper/const-validators";
import { Control, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface CustomMultilineInputProps {
  name: string;
  control: Control<any, any>;
  validators: ValidatorsType;
  defaultValue?: string;
}

const CustomMultilineInput: FC<CustomMultilineInputProps> = (props) => {
  const { control, validators, name, defaultValue } = props;
  return (
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={validators}
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
    </div>
  );
};

export { CustomMultilineInput };
