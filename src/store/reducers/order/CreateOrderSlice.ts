import { createSlice } from '@reduxjs/toolkit'

interface OrderState {
  numOrder: number
  deviceSN: string
  legalEntity: boolean
  name: string
  lastName: string
  phoneNum: string
  prePayment: number
  prePrice: number
  descriptionDamage: string
  descriptionDevice: string
}

const initialState: OrderState = {
  numOrder: 1,
  deviceSN: '',
  legalEntity: false,
  name: '',
  lastName: '',
  phoneNum: '',
  prePayment: 0,
  prePrice: 0,
  descriptionDamage: '',
  descriptionDevice: '',
}

export const CreateOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    legalEntityState(state) {
      state.legalEntity = !state.legalEntity
    },
  },
  extraReducers: {},
})

export default CreateOrderSlice.reducer
