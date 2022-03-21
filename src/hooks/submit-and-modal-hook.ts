import { useModalWithContext } from "./modal-with-context-hook";

interface IUseSumbitAndModal<T> {
  message: string | null;
  isVisibleModal: boolean;
  submitData: (data: T) => Promise<void>;
  defaultOnCloseModal: () => void;
}

export function useSubmitAndModal<T>(
  performAnActionWithApi: Function,
  messageSuccess: string,
  messageError: string
): IUseSumbitAndModal<T> {
  const { message, isVisibleModal, notifyUser, defaultOnCloseModal } =
    useModalWithContext();

  const submitData = async (data: T) => {
    debugger;
    try {
      await performAnActionWithApi(data);
      notifyUser(messageSuccess);
    } catch (error: any) {
      notifyUser(messageError);
    }
  };

  return {
    message,
    isVisibleModal,
    submitData,
    defaultOnCloseModal,
  };
}