import { configureStore, combineReducers } from '@reduxjs/toolkit'
import doctorReducer from './features/doctorSlice'
import userReducer from './features/userSlice'

const rootReducer = combineReducers({
    doctor: doctorReducer,
    user: userReducer
})

export const store = configureStore({
  reducer: rootReducer
})