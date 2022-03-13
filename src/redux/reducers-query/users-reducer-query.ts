
import { IUserInformation } from './../../models/user-models/user-information-model';
import { apiUrlNames } from './../../services/api-service/const-api-service';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


interface IDataUsersQuery{
    usersInformations: IUserInformation[],
    totalCount: number 
}

export const usersSliceQuery = createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl: apiUrlNames.MAIN_URL}),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getInformationAboutAllUsers: builder.query<IDataUsersQuery, number>({

            query: (page : number = 1 ) => {
               return `${apiUrlNames.URL_USERS_INFORMATIONS}?_limit=${5}&_page=${page}`
            },
        
            transformResponse(response: IUserInformation[], meta: any) {
                const receviedTotalCountPosts = Number(meta?.response?.headers.get('X-Total-Count')) || 0
                return { usersInformations: response, 
                    totalCount: receviedTotalCountPosts }
              }
        })
    })
})

export const {useGetInformationAboutAllUsersQuery} = usersSliceQuery