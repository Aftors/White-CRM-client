import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IOrder } from '../models/IOrder'

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8443/order',
  }),
  endpoints: (build) => ({
    createOrder: build.mutation<IOrder, IOrder>({
      query: (order) => ({
        url: `create`,
        method: 'POST',
        body: order,
      }),
    }),
  }),
})
