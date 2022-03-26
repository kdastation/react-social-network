import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSubmitAndModal } from "../../../hooks/submit-and-modal-hook";
import {
  ChangeCityUser,
  DataForChangeCityUser,
} from "../../../services/api-service/user-api-servise/change-city-user";
import { CustomModal } from "../../custom-modal/custom-modal";
import { FormForChangeProps } from "../../settings-profile/settings-profile-template";
import { DataCities } from "./data-city";

const CityChangeForm: FC<FormForChangeProps> = (props) => {
  const { userName, deactivateEditMode } = props;

  const { control, handleSubmit } = useForm({
    mode: "onBlur",
  });

  const {
    submitData: updgradeChangeCitySubmit,
    isVisibleModal,
    message,
    defaultOnCloseModal,
  } = useSubmitAndModal(
    async (data: any) => {
      await changeCitySumbit(data);
    },
    "Город успешно обновлен!",
    "Произошла ошибка..."
  );

  const changeCitySumbit = async (data: any) => {
    const updateData: DataForChangeCityUser = {
      userName: userName as string,
      newCity: data.city,
    };
    await ChangeCityUser(updateData);
  };

  const onCloseModal = () => {
    defaultOnCloseModal();
    deactivateEditMode();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(updgradeChangeCitySubmit)}>
        <Controller
          rules={{
            required: "Поле обязательно для заполнения",
          }}
          name="city"
          control={control}
          render={({ field, fieldState }) => {
            return (
              <FormControl error={!!fieldState.error} fullWidth>
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  {...field}
                  value={field.value || ""}
                >
                  {DataCities.map((city) => {
                    return (
                      <MenuItem key={city.name} value={city.name}>
                        {city.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            );
          }}
        />
        <div>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
      {isVisibleModal && (
        <CustomModal
          isVisibleModal={isVisibleModal}
          message={message}
          onCloseModal={onCloseModal}
        />
      )}
    </div>
  );
};

export { CityChangeForm };
