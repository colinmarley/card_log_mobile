import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice'
import userReducer from '../src/features/user/userSlice'
import registrationReducer from '../src/features/user/registrationSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    registration: registrationReducer,
  },
})
