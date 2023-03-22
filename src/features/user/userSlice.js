import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: "",
  email: "",
  fullName: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId: (state, action) => {
        state.id = action.payload
    },
    setUserData: (state, action) => {
        state.id = action.payload.id
        state.email = action.payload.email
        state.fullName = action.payload.fullName
    },
  },
})

// Action creators are generated for each case reducer function
export const { setId, setUserData } = userSlice.actions

export default userSlice.reducer