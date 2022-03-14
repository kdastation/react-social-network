import { calculateQuantityOfPageNumbers } from '../utils/utils';
import { useState } from "react"

export const usePaginationButton = (totalCountPages: number = 0, 
                                    limit: number = 0,
                                    initialCurrentPage: number = 1) => {

    const [currentPage, setCurrentPage] = useState<number>(initialCurrentPage)
    const quantityOfPageNumbers = calculateQuantityOfPageNumbers(totalCountPages, limit)
    
    const changeCurrentPage = (newCurrentPage: number): void => {
        setCurrentPage(newCurrentPage)
    }

    return {
        currentPage,
        changeCurrentPage,
        quantityOfPageNumbers,
        lastPage: quantityOfPageNumbers 
    }
}