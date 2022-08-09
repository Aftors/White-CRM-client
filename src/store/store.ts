import userReducer from './reducers/UserSlice'
import deviceModalReducer from './reducers/modal/DeviceModalSlice'
import createOrderReducer from './reducers/order/CreateOrderSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userAPI } from '../service/UserService'
import { orderAPI } from '../service/OrderService'

const rootReducer = combineReducers({
  userReducer,
  deviceModalReducer,
  createOrderReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(orderAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
