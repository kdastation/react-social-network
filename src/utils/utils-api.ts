import { AxiosResponse } from "axios"

export const getCountItemsFromHeaders = (response: any): number => {
    return Number(response.headers['x-total-count'])
}