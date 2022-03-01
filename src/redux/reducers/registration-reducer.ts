import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface IRegistrationState{
    errorMessage: null | string,
    login: string,
    password: string
}

const initialState: IRegistrationState = {
    login: "",
    password: "",
    errorMessage: null
}

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setErrorMessageRegister(state, action: PayloadAction<string>){
            state.errorMessage = action.payload
        },
        setLogin(state, action: PayloadAction<string>){
            state.login = action.payload
        },
        setPassword(state, action: PayloadAction<string>){
            state.password = action.payload
        },
        clearLoginAndPasswordField(state){
            state = initialState
        }
    }
})


export const {clearLoginAndPasswordField, 
            setLogin, setPassword, setErrorMessageRegister} = registrationSlice.actions

export const registrationReducer = registrationSlice.reducer