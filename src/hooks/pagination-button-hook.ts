import { calculateQuantityOfPageNumbers } from "../utils/utils";
import { useState } from "react";

export const usePaginationButton = (
  totalCountPages: number = 0,
  limit: number = 0,
  initialCurrentPage: number = 1
) => {
  const [currentPage, setCurrentPage] = useState<number>(initialCurrentPage);
  const quantityOfPageNumbers = calculateQuantityOfPageNumbers(
    totalCountPages,
    limit
  );
  const isCanDownloadMore =
    quantityOfPageNumbers > 0 && currentPage !== quantityOfPageNumbers;

  const changeCurrentPage = (newCurrentPage: number): void => {
    setCurrentPage(newCurrentPage);
  };

  const resetCurrentPage = () => {
    setCurrentPage(1);
  };

  const loadMoreItems = () => {
    if (isCanDownloadMore) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    changeCurrentPage,
    quantityOfPageNumbers,
    lastPage: quantityOfPageNumbers,
    isCanDownloadMore,
    resetCurrentPage,
    loadMoreItems,
  };
};
