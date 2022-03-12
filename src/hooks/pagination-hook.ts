import { calculateQuantityOfPageNumbers, createAnArrayOfPageNumbersToRender } from './../utils/utils';
import { useState } from "react"

export const usePagination = (totalCountPages: number = 0, 
                              limit: number = 0,initialCurrentPage: number = 1) => {

    const [currentPage, setCurrentPage] = useState<number>(initialCurrentPage)
    const quantityOfPageNumbers = calculateQuantityOfPageNumbers(totalCountPages, limit)
    const arrayOfPageNumbersToRender = createAnArrayOfPageNumbersToRender(quantityOfPageNumbers)

    const changeCurrentPage = (newCurrentPage: number): void => {
        setCurrentPage(newCurrentPage)
    }

    return {
        currentPage,
        arrayOfPageNumbersToRender,
        changeCurrentPage,
        quantityOfPageNumbers,
        lastPage: quantityOfPageNumbers 
    }
}