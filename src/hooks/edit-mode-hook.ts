import { useState } from "react";

export const useEditMode = () => {
  const [editMode, setEditMode] = useState<boolean>(false);

  const activateEditeMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return {
    editMode,
    activateEditeMode,
    deactivateEditMode,
  };
};
