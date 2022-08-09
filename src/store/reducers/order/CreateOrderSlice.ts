import { createSlice } from '@reduxjs/toolkit'
import { IOrder } from '../../../models/IOrder'

const initialState: IOrder = {
  numOrder: 1,
  deviceSN: '',
  legalEntity: false,
  name: '',
  lastName: '',
  phoneNum: '',
  prePayment: '',
  prePrice: '',
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
    nameBind(state, action) {
      state.name = action.payload
    },
    lastNameBind(state, action) {
      state.lastName = action.payload
    },
    prePaymentBind(state, action) {
      state.prePayment = action.payload
    },
    prePriceBind(state, action) {
      state.prePrice = action.payload
    },
    phoneNumBind(state, action) {
      state.phoneNum = action.payload
    },
    deviceSNBind(state, action) {
      state.deviceSN = action.payload
    },
  },
  extraReducers: {},
})

export default CreateOrderSlice.reducer
