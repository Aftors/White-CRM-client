import { createSlice } from '@reduxjs/toolkit'

interface functionalBarState {
  activeComponent: string
}

const initialState: functionalBarState = {
  activeComponent: '',
}

export const functionalBarSlice = createSlice({
  name: 'functionalBar',
  initialState,
  reducers: {
    selectActiveComponent(state, action) {
      state.activeComponent = action.payload
    },
  },
  extraReducers: {},
})

export default functionalBarSlice.reducer
