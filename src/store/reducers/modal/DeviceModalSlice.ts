import { createSlice } from '@reduxjs/toolkit'

interface DeviceModalState {
  visible: boolean
}

const initialState: DeviceModalState = {
  visible: false,
}

export const deviceModalSlice = createSlice({
  name: 'deviceModal',
  initialState,
  reducers: {
    visibleOn(state) {
      state.visible = true
    },
    visibleOff(state) {
      state.visible = false
    },
  },
  extraReducers: {},
})

export default deviceModalSlice.reducer
