import { useState } from "react";

const useFetching = (callback: Function) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetching = async () => {
    setIsLoading(true);
    try {
      await callback();
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isFetching: isLoading,
    error,
    fetching,
  };
};

export { useFetching };
