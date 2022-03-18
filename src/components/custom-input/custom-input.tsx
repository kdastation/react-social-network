import { TextField } from "@mui/material";
import { FC, memo } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";

interface CustomInputProps {
  control: Control<any, any>;
  Component: typeof TextField;
  name: string;
  label?: string;
  validators?: Omit<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  variant?: "standard" | "filled" | "outlined";
  type?: "password";
  additionalErrorIndicator?: boolean;
}
const CustomInput: FC<CustomInputProps> = (props) => {
  const {
    Component,
    control,
    name,
    label,
    validators,
    type,
    additionalErrorIndicator,
  } = props;
  return (
    <Controller
      name={name}
      rules={validators}
      render={({ field, fieldState: { error } }) => (
        <Component
          type={type}
          error={!!error?.message || additionalErrorIndicator}
          helperText={error?.message}
          label={label}
          {...field}
          value={field.value || ""}
        />
      )}
      control={control}
    />
  );
};

const MemoCustomInput = memo(CustomInput);

export { CustomInput, MemoCustomInput };
