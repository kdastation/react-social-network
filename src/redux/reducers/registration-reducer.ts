import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IRegistrationState{
    errorMessage: null | string
}

const initialState: IRegistrationState = {
    errorMessage: null
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setErrorMessageRegister(state, action: PayloadAction<string>){
            state.errorMessage = action.payload
        }
    }
})


export const {setErrorMessageRegister} = registrationSlice.actions

export const registrationReducer = registrationSlice.reducer