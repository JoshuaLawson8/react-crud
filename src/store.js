import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from './features/doctorSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer
  },
})