import { RegisterOptions } from "react-hook-form";

const minLengthPost = 10

export const validatorsFormCreatePost : Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'> = {
    required: "Поле должно быть заполнено",
    minLength: {value: minLengthPost, message: `Минимальная длина пост ${minLengthPost} символов`}
}