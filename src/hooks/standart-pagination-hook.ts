
import { useState } from "react"

export const useStandartPagination = (initialPage: number = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage)

    const changeCurrentPage = (event: React.ChangeEvent<unknown>, page: number ) => {
        setCurrentPage(page)
    } 

    return {
        currentPage,
        changeCurrentPage
    }
}