import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Employee_ID: 0,
    Provider_Type: "",
    First_Name: "",
    Last_Name: "Lawson",
    Location_ID: 0,
    Appointments: {}
}

export const doctorSlice = createSlice({
    name:'doctor',
    initialState,
    reducers: {
        setDoctor: (state, action) => {
            return action.payload
        },
        setDocAppointments: (state, action) => {
            return {...state, Appointments: action.payload}
        },
        setPatients: (state, action) => {
            return {...state, Patients: action.payload}
        }
    }
})

export const { setDoctor, setDocAppointments, setPatients } = doctorSlice.actions

export default doctorSlice.reducer