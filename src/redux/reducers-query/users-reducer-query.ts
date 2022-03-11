import { IUserInformation } from './../../models/user-models/user-information-model';
import { apiUrlNames } from './../../services/api-service/const-api-service';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersSliceQuery = createApi({
    reducerPath:'users',
    baseQuery: fetchBaseQuery({baseUrl: apiUrlNames.MAIN_URL}),
    endpoints: (builder) => ({
        getInformationAboutAllUsers: builder.query<IUserInformation[], null>({
            query: () => ({
                url: apiUrlNames.URL_USERS_INFORMATIONS
            })
        })
    })
})

export const {useGetInformationAboutAllUsersQuery} = usersSliceQuery