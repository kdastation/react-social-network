import { useState } from "react"

export const useStandartPagination = (initialPage: number = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage)

    const changeCurrentPage = (page: number ) => {
        setCurrentPage(page)
    } 

    return {
        currentPage,
        changeCurrentPage
    }
}