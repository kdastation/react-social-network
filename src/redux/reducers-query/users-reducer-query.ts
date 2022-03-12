
import { IUserInformation } from './../../models/user-models/user-information-model';
import { apiUrlNames } from './../../services/api-service/const-api-service';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


interface IDataUsersQuery{
    usersInformations: IUserInformation[],
    totalCount: number | undefined
}

export const usersSliceQuery = createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl: apiUrlNames.MAIN_URL}),
    tagTypes: ['users'],
    endpoints: (builder) => ({
        getInformationAboutAllUsers: builder.query<IDataUsersQuery, number>({

            query: (page : number = 3 ) => {
               return `${apiUrlNames.URL_USERS_INFORMATIONS}?_limit=${5}&_page=${page}`
            },
        
            transformResponse(response: IUserInformation[], meta: any) {
                return { usersInformations: response, 
                    totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
              }
        })
    })
})

export const {useGetInformationAboutAllUsersQuery} = usersSliceQuery