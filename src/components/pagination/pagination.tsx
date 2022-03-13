import { FC } from "react"
import { calculateQuantityOfPageNumbers, createAnArrayOfPageNumbersToRender } from "../../utils/utils"

interface PaginationProps{
    
    totalCountItems: number,
    limit: number
    currentPage: number,
    changeCurrentPage: Function

}
//TODO: Доделать
const Pagination: FC<PaginationProps> = (props) => {

    const {currentPage, totalCountItems, changeCurrentPage, limit} = props
    const quantityOfPageNumbers = calculateQuantityOfPageNumbers(totalCountItems,
                                                                                 limit)
    
    const arrayPagesNumbers = createAnArrayOfPageNumbersToRender(quantityOfPageNumbers)
    console.log(arrayPagesNumbers)
    return (
        <div>
            {arrayPagesNumbers.map(numberPage => {
                return <div onClick={() => changeCurrentPage(numberPage)} key={numberPage}>{numberPage}</div>
            })}
        </div>
    )
}

export {Pagination}