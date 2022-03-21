import { useMode } from "./mode-hook";
import { useState } from "react";

export const useModalWithContext = () => {
  const [message, setMessage] = useState<string | null>(null);
  const {
    mode: isVisibleModal,
    activateMode: onOpenModal,
    deactivateMode: defaultOnCloseModal,
  } = useMode();

  const notifyUser = (message: string) => {
    setMessage(message);
    onOpenModal();
  };

  return {
    isVisibleModal,
    message,
    defaultOnCloseModal,
    notifyUser,
  };
};
