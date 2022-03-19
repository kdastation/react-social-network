import { useEffect, useState } from "react";

type fetchType<T> = [T | null, boolean, string | null];

export function useFetch<T>(getData: Function, params: any): fetchType<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getData(params)
      .then((receviedData: T) => setData(receviedData))
      .catch((error: Error) => setErrorMessage(error.message))
      .finally(() => setIsLoading(false));
  }, [getData, params]);

  return [data, isLoading, errorMessage];
}
