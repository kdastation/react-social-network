import { AxiosResponse } from "axios"

export const getCountItemsFromHeaders = (response: AxiosResponse): number => {
    return Number(response.headers['x-total-count'])
}