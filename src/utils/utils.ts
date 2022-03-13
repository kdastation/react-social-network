export const calculateQuantityOfPageNumbers = (totalCountPages: number, limit: number): number => {
    return Math.ceil(totalCountPages/limit)
}

export const createAnArrayOfPageNumbersToRender = (quantityOfPageNumbers: number): number[] => {
    const arrayNumbers = []
    for (let numberPage = 0; numberPage < quantityOfPageNumbers; numberPage++){
        arrayNumbers.push(numberPage+1)
    }
    return arrayNumbers
}