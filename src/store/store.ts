import userReducer from './reducers/UserSlice'
import deviceModalReducer from './reducers/modal/DeviceModalSlice'
import createOrderReducer from './reducers/order/CreateOrderSlice'
import functionalBarReducer from './reducers/functionarBar/FunctionalBarSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userAPI } from '../service/UserService'
import { orderAPI } from '../service/OrderService'
import { fabricatorAPI } from '../service/FabricatorService'
const rootReducer = combineReducers({
  userReducer,
  deviceModalReducer,
  createOrderReducer,
  functionalBarReducer,
  [userAPI.reducerPath]: userAPI.reducer,
  [orderAPI.reducerPath]: orderAPI.reducer,
  [fabricatorAPI.reducerPath]: fabricatorAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(userAPI.middleware)
        .concat(orderAPI.middleware)
        .concat(fabricatorAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
