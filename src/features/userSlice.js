import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Patient_ID: 0,
    First_Name: "",
    Last_Name: "",
    Height: 0,
    Weight: 0,
    Sex: "",
    Address: "",
    City: "",
    State: "",
    Zip: 0,
    Appointments: {},
    Provider:{}
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        setProvider: (state, action) => {
            return {
                ...state,
                Provider: action.payload
            }
        }      
    }
})

export const { setUser, setProvider} = userSlice.actions

export default userSlice.reducer