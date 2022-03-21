import { useState } from "react";

export const useMode = () => {
  const [mode, setMode] = useState<boolean>(false);

  const activateMode = () => {
    setMode(true);
  };

  const deactivateMode = () => {
    setMode(false);
  };
  return {
    mode,
    activateMode,
    deactivateMode,
  };
};
