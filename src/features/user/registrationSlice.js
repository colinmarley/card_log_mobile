import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: "",
  fullName: "",
  password: "",
  confirmPassword: ""
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setRegistrationEmail: (state, action) => {
        state.email = action.payload
    },
    setRegistrationFullName: (state, action) => {
        state.fullName = action.payload
    },
    setRegistrationPassword: (state, action) => {
        state.password = action.payload
    },
    setRegistrationConfirmPassword: (state, action) => {
        state.confirmPassword = action.payload
    },
    resetRegistrationData: (state) => {
      state = initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const {
    setRegistrationEmail, setRegistrationFullName, setRegistrationPassword,
    setRegistrationConfirmPassword, resetRegistrationData
} = registrationSlice.actions

export default registrationSlice.reducer