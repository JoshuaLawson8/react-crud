import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Employee_ID: 0,
    Provider_Type: "",
    First_Name: "",
    Last_Name: "",
    Location_ID: 0,
    Appointments: {}
}

export const doctorSlice = createSlice({
    name:'doctor',
    initialState,
    reducers: {
        setDoctor: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setDoctor } = doctorSlice.actions

export default doctorSlice.reducer